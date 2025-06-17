import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utills/moviesSlice";
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";




const useMovieTrailer = (movieId) =>{
  const TrailerVideo = useSelector(store=> store.movies?.trailerVideo)
    const dispatch = useDispatch();

    // Fetch Trailer video & Updating the Store with trailer video data
    
    
      const getMovieVideos = async () => {
       const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + 
        "/videos?language=en-US",
         API_OPTIONS);
       const json = await data.json();
       console.log(json);
    
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
      };
      useEffect(()=>{
        getMovieVideos();
      }, []);

}

export default useMovieTrailer;