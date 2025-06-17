
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId}) => {
const trailerVideo =  useSelector((store)=> store.movies?.trailerVideo) ;

useMovieTrailer(movieId);

  // const videoUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`;
  // console.log(videoUrl);
  // // https://www.youtube.com/embed/1376434?&autoplay=1&mute=1
  // 1376434
  return (
    <div>VideoBackground
        <iframe
         className="w-screen aspect-video "
         src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1"} 
        // src={videoUrl}
         title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerPolicy="strict-origin-when-cross-origin" 
          ></iframe>
    </div>
  )
};

export default VideoBackground;