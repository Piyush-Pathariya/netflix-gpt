import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();
 useTopRatedMovies();
 
  return  (
  <div>
    <Header/>
    {
      showGptSearch ? (<GptSearchPage/> ):(
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )
    };
    </div>
  );
};

export default Browse;