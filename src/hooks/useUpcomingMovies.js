import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utills/moviesSlice";

const useUpcomingMovies = () =>{

    const dispatch =  useDispatch();

    const getUpcomingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));

    };
    useEffect (()=>{
        getUpcomingMovies();
    },[]);
}
export default useUpcomingMovies;