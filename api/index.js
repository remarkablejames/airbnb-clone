const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");

require("dotenv").config({ path: "./.env" });

// GLOBAL MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// DB CONNECTION
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.post("/test", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.json({
    message: "Hello World!",
  });
});
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  res.json({
    message: "User created successfully!",
    user: newUser,
  });
});

app.post("/login", async (req, res) => {
  console.log("login");
  const { email, password } = req.body;

  // 1. Check if the user exists with this email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  // 2. If the user exists, check if the password is correct
  if (bcrypt.compareSync(password, user.password)) {
    // 3. If the password is correct, create a session
    // req.session.user = user;
    // 4. Send the user details
    res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } else {
    res.status(404).json({
      message: "Invalid credentials",
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
