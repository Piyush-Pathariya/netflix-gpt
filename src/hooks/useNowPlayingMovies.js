import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addNowPlayingMovies } from "../utills/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and Update Store
  const dispatch = useDispatch();
        // console.log("🎬 TMDB Results:", json.results); // Confirm data
        
        const nowPlayingMovies = useSelector((store )=> store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));   // ✅ Dispatch to Redux

        console.log("🎬 TMDB Results:", json.results); // Confirm data
      };
      useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
        }, []);
    };

export default useNowPlayingMovies;