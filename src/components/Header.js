import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utills/userSlice";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { AVATAR, LOGO } from "../utills/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img  className="w-44" 
        src={LOGO}   alt="logo"/>

{user && (<div className="flex p-2  ">
<img className="w-20 h-20 p-2" src={AVATAR}
  alt="UserIcon"/>
<button onClick={handleSignOut} className="font-bold text-yellow-50"> Sign Out</button>
</div>
  )}
  </div>
  
)};

export default Header