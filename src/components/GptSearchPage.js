import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetion from './GptMovieSuggetion';
import { BG_URL } from '../utills/constants';

const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-20">
          <img
          src={BG_URL} alt="Background"
          />
        </div>
      <GptSearchBar/>
      <GptMovieSuggetion/>
    </div>
    );
};
export default GptSearchPage;