import User from "../models/user.js"

export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createTeacher=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "teacher",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Teacher created successfully"
      });
  
    } catch (error) {
      console.log(error)
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Student created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }