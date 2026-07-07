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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
