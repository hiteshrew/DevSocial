const express = require("express");
const connectDB = require("./config/db");
const app = express();
const userRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");
const postsRoute = require("./routes/api/posts");
const profileRoute = require("./routes/api/profile");

connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/profile", profileRoute);

// Listening to the port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
``;
