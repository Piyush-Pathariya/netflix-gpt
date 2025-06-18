import React from 'react'
import lang from '../utills/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langkey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='p-2 m-2 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder} />
            <button className='py-3 px-3 bg-blue-400 text-xl text-yellow-50 rounded-xl col-span-3'>{lang[langkey].search}</button>

        </form>
    </div>
  )
};

export default GptSearchBar;