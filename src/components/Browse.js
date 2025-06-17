import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 
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