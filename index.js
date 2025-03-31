const express=require('express')
const app=express();
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser')
const multer=require('multer')
const upload = multer({ dest: 'uploads/' })

  
mongoose.connect('mongodb://127.0.0.1:27017/homecraftsman');

const signup=new Schema({
    username:String,
    email:String,
    password:String,
    profilepic:String,
    projects:Array,
    ideas:Array
})
const signupModel=mongoose.model('signupModel',signup);



const project = new Schema({
  user: String, 
  date: {
    type: Date,
    default: Date.now(),
  },
  images: [
    {
      url: String, 
      caption: String, 
    },
  ],
});

const projectModel = mongoose.model("projectModel", project);


//ideas model
const idea=new Schema({
  idea:String,
  user:String,
  date:{
    type:Date,
    default:Date.now()
  }
})
const ideaModel=mongoose.model('ideaModel',idea);

const cors=require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));


app.post('/', function(req, res) {
    let { username, email, password } = req.body;
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ message: "Error generating salt" });
  
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });
  
        try {
          const user = await signupModel.create({
            username,
            email,
            password: hash,
          });
  
          let token = jwt.sign({ email }, process.env.JWT_SECRET || "Abhishek", { expiresIn: "1h" }); 
          console.log(user);
          return res.status(201).json({ message: "User created successfully", user, token });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Error creating user" });
        }
      });
    });
  });
  

  app.post('/login', async function (req, res) {
    const { email, password } = req.body;

    try {
        
        const user = await signupModel.findOne({ email });

        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: "User not found" });
        }

       
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid credentials');
            return res.status(401).json({ message: "Invalid credentials" });
        }

       
        let token = jwt.sign({ email }, process.env.JWT_SECRET || "Abhishek", { expiresIn: "1h" });

       
        res.status(200).json({
            message: "Login successful",
            user: {
                username: user.username,
                email: user.email,
                profilepic: user.profilepic 
            },
            token
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/logout', (req, res) => {

  res.status(200).json({ message: "Logged out successfully" });
});


app.post('/profilepic', upload.single('avatar'), async (req, res) => {
  try {
    const imageUrl = `http://localhost:8080/uploads/${req.file.filename}`;

    const token = req.headers.authorization.split(' ')[1]; 
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Abhishek");
    
    const userEmail = decoded.email;  
    const user = await signupModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   
    user.profilepic = imageUrl;
    await user.save();

    res.status(200).json({ message: 'File uploaded successfully', profilePicUrl: imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'File upload failed' });
  }
});


app.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];  
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Abhishek");
    const userEmail = decoded.email;  
    
    const user = await signupModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    res.status(200).json({
      username: user.username,
      email: user.email,
      profilepic: user.profilepic,  
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch profile data' });
  }
});


app.post('/ideas', async (req, res) => {
  const { idea } = req.body;  // Extract idea from the request body

  try {
    // Get the logged-in user's email from the JWT token
    const token = req.headers.authorization.split(' ')[1];  // Get JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Abhishek");
    const userEmail = decoded.email;

    // Find the user by email to associate the idea with the correct user
    const user = await signupModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save the new idea
    const newIdea = await ideaModel.create({
      idea,
      user: userEmail,  // Store the user's email with the idea
    });

    res.status(201).json({
      message: "Idea created successfully",
      idea: newIdea,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating idea" });
  }
});


app.get('/ideas', async (req, res) => {
  try {
    // Fetch all ideas from the database
    const allIdeas = await ideaModel.find().sort({ date: -1 });  // Sort by date (most recent first)

    res.status(200).json({
      ideas: allIdeas,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching ideas" });
  }
});


const uploadMultiple = multer({ dest: 'uploads/' }).array('images', 5); 

app.post('/projects', uploadMultiple, async (req, res) => {
  try {
    // Log the uploaded files to verify they're coming through
    console.log('Files uploaded:', req.files);

    const token = req.headers.authorization.split(' ')[1]; // Get JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Abhishek");
    const userEmail = decoded.email;  // Get email from decoded JWT token

    const user = await signupModel.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure that captions are also received
    console.log('Received captions:', req.body.captions);

    const images = req.files.map((file, index) => ({
      url: `http://localhost:8080/uploads/${file.filename}`, // File URL
      caption: req.body.captions ? req.body.captions[index] : "", // Optional caption
    }));

    // Log the images array to verify it's structured correctly
    console.log('Images with captions:', images);

    // Create and save the new project
    const newProject = await projectModel.create({
      user: userEmail,
      images,
    });

    res.status(201).json({
      message: "Project created successfully",
      project: newProject,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating project" });
  }
});



app.get('/projects', async (req, res) => {
  try {
    const projects = await projectModel.find().sort({ date: -1 });  
    res.status(200).json({ projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching projects" });
  }
});

app.delete('/ideas/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    
    const token = req.headers.authorization.split(' ')[1];  
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Abhishek");
    const userEmail = decoded.email;

    // Find the idea by its ID
    const idea = await ideaModel.findById(id);

    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    
    if (idea.user !== userEmail) {
      return res.status(403).json({ message: "You can only delete your own ideas" });
    }

    
    await idea.remove();
    
    res.status(200).json({ message: "Idea deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting idea" });
  }
});




app.listen(8080,()=>{
    console.log('server running at 8080')
})

