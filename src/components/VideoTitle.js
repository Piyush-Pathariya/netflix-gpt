
const VideoTitle = ({title, overview}) => {
  return( 
    <div className=" w-screen aspect-video pt-[18%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-2">
            <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 p-4 text-xl hover:bg-opacity-70 rounded-xl"> ▶ Play</button>
            <button className="bg-gray-500 text-white hidden md:inline-block mx-2 my-2 px-8 p-4 text-xl hover:bg-opacity-70 rounded-xl"> More Info</button>
        </div>
    </div>
  )
};

export default VideoTitle ;