
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

// Proxy route to fetch data from OMDb
router.get('/fetch-movie', async (req, res) => {
    const search = req.query.title || 'avengers';  // Default search term if none is provided
    const page = req.query.page || 1;
  
    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          s: search,
          page: page,
          apiKey: OMDB_API_KEY,
        },
      });
  
      if (response.data.Response === 'True') {
        res.json(response.data);
      } else {
        res.status(404).json({ message: 'Movies not found' });
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      res.status(500).json({ message: 'Error fetching movie data' });
    }
  });


export default router;
