import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addNowPlayingMovies } from "../utills/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  
        // console.log("🎬 TMDB Results:", json.results); // Confirm data

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await res.json();

        console.log("🎬 TMDB Results:", json.results); // Confirm data
        dispatch(addNowPlayingMovies(json.results));   // ✅ Dispatch to Redux
      } catch (err) {
        console.error("❌ Fetch failed:", err);
      }
    };

    fetchMovies();
  }, []);
};

export default useNowPlayingMovies;




// const useNowPlayingMovies = () =>{
 
//     // fetch  data from tmdb api and update redux store
//      const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("🔁 useEffect triggered in useNowPlayingMovies");

//   console.log("✅ useNowPlayingMovies hook called"); // add this


//   const getNowPlayingMovies = async () =>{
//     try{
//       console.log("fetch started");
//     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
//    console.log(data);
//     const json = await data.json();
//     console.log(json.results);
//      console.log("TMDB Results:", json.results);
//     dispatch(addNowPlayingMovies(json.results));
//     }
//     catch (error) {
//       console.error("Failed to fetch movies:", error);
//     }
//   };

// //   const TestComponent = () => {
// //   React.useEffect(() => {
// //     console.log("🧪 useEffect works here");
// //   }, []);

// //   return <div>Test</div>;
// // };


//   // useEffect( () => {
//   //   console.log("🔁 useEffect triggered");
//   //   getNowPlayingMovies();
//   // },[]);

  
//     getNowPlayingMovies();
//   }, [dispatch]); // include dispatch to avoid warnings

// };
// export default useNowPlayingMovies;