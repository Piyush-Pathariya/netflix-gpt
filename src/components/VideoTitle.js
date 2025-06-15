

const VideoTitle = ({title, overview}) => {
  return( 
    <div className=" w-screen aspect-video pt-[30%]  px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black  px-10 p-4 text-xl hover:bg-opacity-70 rounded-xl"> ▶ Play</button>
            <button className="bg-gray-500 text-white mx-2  px-8 p-4 text-xl hover:bg-opacity-70 rounded-xl"> More Info</button>
        </div>
    </div>
  )
};

export default VideoTitle ;