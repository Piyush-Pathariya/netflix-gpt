import openai from "../utills/openai"
import lang from '../utills/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { API_OPTIONS } from "../utills/constants";
import { addGptMovieResult } from "../utills/gptSlice";

const GptSearchBar = () => {
  
 const dispatch = useDispatch();
    const langkey = useSelector(store => store.config.lang);

    const searchText = useRef(null);

    // Search movie in TMDB 
    const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
        movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json =  await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () =>{
        console.log(searchText.current.value);
        //  make an API call to GPT API and get Movie result
const gptQuery = "Act as a Movie Recomendation System and suggest some movies for the query"
                  + searchText.current.value + 
 "                only give me names of 5 Movies, comma seperated like the example given ahead. Example Result : Gadar , Sholay, Don, Koi mil gya , Dabang ";
    
const model = openai.getGenerativeModel({ model: "gemini-1.5-flash" });

const gptResults = await model.generateContent(gptQuery);
if(!gptResults.response.text()){
  //  to do Write error handle
}

console.log(gptResults.response.text());
const gptMovies = gptResults.response?.text().split(",");


//  For each movie I Will search TMDB API
const promiseArray = gptMovies.map(movie =>searchMovieTMDB(movie));
//  it returns 5 promise ....it take time

const tmdbResults = await Promise.all(promiseArray);
console.log(tmdbResults);
dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));

    }
  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}
        >
            <input ref={searchText}
             type='text' className='p-2 m-2 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder} />
            <button className='py-3 px-3 bg-blue-400 text-xl text-yellow-50 rounded-xl col-span-3'
            onClick={handleGptSearchClick}>
                {lang[langkey].search}</button>

        </form>
    </div>
  )
};

export default GptSearchBar;