const express = require("express");
const cors = require("cors");
// CORS is used to enable cross-origin requests, allowing resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const app = express();
require("dotenv").config();
const connectDB = require("./db");

const PORT = 5000;
connectDB();

app.use(express.json());
//This middleware is used to parse incoming requests with JSON payloads. It parses the JSON data sent in the request body and makes it available under req.body.
app.use(cors());

app.use("/api/user", require("./routes/user"));
//This line sets up a route handler for requests that start with /api/user.
app.use("/api/playlist", require("./routes/playlist"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
