const Movie = require('../models/movie.model');

const getMovieById = async(id)=>{
  const movie = await Movie.findById(id);
  if(!movie){
    return {
      err: "No Movie Found for the correspoding id provided",
      code: 404
    }
  };
  return movie;
}

module.exports = {
getMovieById,
}