import express from "express";
import cors from "cors";

const app = express();
const port = 3000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

app.get("/health", (req, res) => {
  res.send("Health check: OK");
});

// // Start the server
app.listen(port, "0.0.0.0", () => {
  console.log("Server running on 0.0.0.0:3000");
});
