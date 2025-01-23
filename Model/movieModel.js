import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  releaseDate: Date,
  imageUrl: String,
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;  // Ensure this is correct
