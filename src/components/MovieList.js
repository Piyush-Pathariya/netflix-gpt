import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  if (!movies || movies.length === 0) return <div>Loading movies...</div>;

    console.log(movies);
 
 
  // return (
  //   <div>
  //     {movies.map((movie) => (
  //       <div key={movie.id}>
  //         <h3>{movie.title}</h3>
  //         <p>{movie.overview}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
 
 
 
 
 
    return (
    <div className='px-6 '> 
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex  overflow-x-scroll'>
            
            <div className=' flex'>
              {movies?.map((movie )=> <MovieCard key={movie.id} posterPath={movie.poster_path} /> )}

 
            </div>
        </div>

   </div>
  );
};

export default MovieList