// import express from "express";
// import dotenv from "dotenv";
// import colors from "colors";
// import ConnDB from "./config/db.js";
// import authRoutes from "./Routes/authRoutes.js";
// import cors from "cors"
// import moviesRoute from "./Routes/movieRoutes.js"

// dotenv.config();

// // Create Express app
// const app = express();

// // Middleware to parse JSON data
// app.use(express.json());
// app.use(cors())

// // Connection to database
// ConnDB();

// // Routes
// app.use('/', authRoutes);
// // app.use("/movies",movieRoutes)
// app.use("/movies", moviesRoute);

// // Basic API endpoint
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// const port = process.env.PORT || 9000;
// app.listen(port, () => {
//     console.log(`Server is running at ${port}`.cyan.bold);
// });
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import ConnDB from './config/db.js';
import authRoutes from './Routes/authRoutes.js';
import cors from 'cors';
import moviesRoute from './Routes/movieRoutes.js';

dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());
// app.use(cors());

const corsOptions = {
    origin: 'https://your-frontend-url.netlify.app',  // Replace with your actual frontend URL
  };
  app.use(cors(corsOptions));

// Connection to database
ConnDB();

// Routes
app.use('/', authRoutes);
app.use('/movies', moviesRoute);  // Use movie routes for the "/movies" endpoint

// Basic API endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`.cyan.bold);
});
