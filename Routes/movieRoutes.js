
// import express from "express";

// import { addMovie } from "../controller/moviecontroller.js";

// const router = express.Router();

// // Add movie route
// router.post('/', addMovie);


// export default router;


import express from "express";
import { addMovie, getMovies,deleteMovie, updateMovie  } from "../controller/moviecontroller.js";  // Make sure to import getMovies

const router = express.Router();

// Add movie route
router.post('/', addMovie);

// Fetch all movies route
router.get('/', getMovies);

// Delete movie route
router.delete('/:id', deleteMovie);  // DELETE request to delete a movie by its ID

router.put('/:id', updateMovie); // Update movie by ID


export default router;
