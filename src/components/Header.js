import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utills/userSlice";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from "../utills/constants";
import { toggleGptSearchView } from "../utills/gptSlice";
import lang from "../utills/languageConstants";
import { changeLanguage } from "../utills/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector ((store) => store.gpt.showGptSearch)
  
  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
  
  // Sign-out successful.
}).catch((error) => {
  navigate("/error");
  // An error happened.
});
  };
    useEffect(()=>{
        const auth = getAuth();
const unSubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {uid, email, displayName ,photoURL}= user;
    dispatch(addUser({uid:uid, email:email, displayName: displayName,photoURL:photoURL})
  );
  navigate("/browse"); 

  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/");
  }
     });
    //  Unsubscribe when header component unmounts
     return ()=> unSubscribe();
}, []);

const handleGptSearchClick = () =>{
  // Toggle GPT Search
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) =>{
 dispatch(changeLanguage(e.target.value));
};
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between sm:bg-blue-900 md:bg-green-700">
        <img  className="w-44 mx-auto md:mx-0" 
        src={LOGO}   alt="logo"/>

{user && (<div className="flex p-2 justify-between ">
 {showGptSearch && (
   <select className="m-2 bg-gray-600 text-white" 
   onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map(lang => 
      <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
     </select>
)}
 <button className="p-2 px-4 mx-4 my-2 bg-amber-400 text-white rounded-lg"
  onClick={handleGptSearchClick}
  >
    {showGptSearch ? "Homepage" : "GPT Search"}
    </button>
<img className="hidden md:block w-20 h-20 p-2" src={AVATAR}
  alt="UserIcon"/>
<button onClick={handleSignOut} className=" mr-20 md:mr-none font-bold text-yellow-50"> (Sign Out)
</button>
</div>
  )}
  </div>
  
)};

export default Header