import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import  {addTrendingMovies} from "../utills/moviesSlice";

const useTrendingMovies = () =>{
    const dispatch = useDispatch();

    const getTrendingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results))
 };
        useEffect(() =>{
            getTrendingMovies();
        },[]);
 
};

export default useTrendingMovies;