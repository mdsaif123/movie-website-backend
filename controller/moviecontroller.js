// import Movie from "../Model/movieModel";
import Movie from "../Model/movieModel.js";

export const addMovie = async (req, res) => {
  try {
    const { title, genre, description, releaseDate, imageUrl } = req.body;
    console.log(req.body)

    // Validate that all required fields are provided
  
    // Create a new movie document
    const newMovie = new Movie({
      title,
      genre,
      description,
      releaseDate,
      imageUrl
    });

    // Save the movie document to the database
    await newMovie.save();

    // Respond with a success message
    res.status(201).json({ message: 'Movie added successfully!' });
  } catch (error) {
    // Log the error for debugging
    console.error('Error adding movie:', error);

    // Respond with a generic error message
    res.status(500).json({ message: 'An error occurred while adding the movie.' });
  }
};

// Fetch all movies function
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();  // Fetch all movies from the database
    res.status(200).json(movies);       // Send the list of movies as response
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ message: 'An error occurred while fetching movies.' });
  }
};


// Delete movie by ID
export const deleteMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findByIdAndDelete(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error });
  }
};

// Update movie by ID
export const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const { title, genre, description, releaseDate, imageUrl } = req.body;

  try {
    // Find movie by ID and update its details
    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      { title, genre, description, releaseDate, imageUrl },
      // { new: true, runValidators: true } // Return the updated document and validate fields
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(500).json({ message: 'An error occurred while updating the movie.', error });
  }
};
