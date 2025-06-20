import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import {  addPopularMovies } from "../utills/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () =>{
 
    // fetch  data from tmdb api and update redux store
     const dispatch = useDispatch();

      const popularMovies = useSelector((store) => store.movies.popularMovies);
     

  const getPopularMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
     console.log("TMDB Results:", json.results);
    dispatch(addPopularMovies(json.results));
    };
  
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []); // include dispatch to avoid warnings

};
export default usePopularMovies;