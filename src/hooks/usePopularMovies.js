import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utills/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () =>{
 
    // fetch  data from tmdb api and update redux store
     const dispatch = useDispatch();



  const getPopularMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
   console.log(data);
    const json = await data.json();
    console.log(json.results);
     console.log("TMDB Results:", json.results);
    dispatch(addPopularMovies(json.results));
    };
  

//   const TestComponent = () => {
//   React.useEffect(() => {
//     console.log("🧪 useEffect works here");
//   }, []);

//   return <div>Test</div>;
// };


  // useEffect( () => {
  //   console.log("🔁 useEffect triggered");
  //   getNowPlayingMovies();
  // },[]);

  useEffect(() => {
    getPopularMovies();
  }, []); // include dispatch to avoid warnings

};
export default usePopularMovies;