import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetion from './GptMovieSuggetion';
import { BG_URL } from '../utills/constants';

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
          <img className='object-cover'
          src={BG_URL} alt="Background"/>
           </div>
      
    <div className='pt-[30%] md:p-0'>
      <GptSearchBar/>
      <GptMovieSuggetion/> 
       
    </div>
    </>
    )
};
export default GptSearchPage;