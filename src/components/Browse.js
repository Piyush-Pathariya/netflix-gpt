import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();
 useTopRatedMovies();
 
  return  (
  <div>
    <Header/>
    <MainContainer />
    <SecondaryContainer />
    {
      /*
      Main Container 
        - Video In Background
        - Video Title
      Secondary Container
       - Movie List * n
       - cards * n

    */
    }
    Browse</div>
  )
};

export default Browse;