 
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test the backend
app.get("/", (req, res) => {
  res.json({
    message: "Connectly backend is running!"
  });
});

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter username and password."
    });
  }

  if (
    username === process.env.DEMO_USERNAME &&
    password === process.env.DEMO_PASSWORD
  ) {
    return res.json({
      success: true,
      message: "Login successful!"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Incorrect username or password."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Connectly backend running on port ${PORT}`);
});
