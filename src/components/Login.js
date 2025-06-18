import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utills/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../utills/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utills/userSlice';
import { BG_URL } from '../utills/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

const name = useRef(null);  
const email = useRef(null);
const password = useRef(null);

const handleButtonClick = () =>{
    // Vallidation the form data
    //checkVallidateData(email , password )
     
  const message = checkValidData( name.current?.value,email.current.value, password.current.value);
  setErrorMessage(message);
//  console.log(name.current.value );
  if(message) return ;

    if(!isSignInForm){
      // Sign Up Logic
     createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  
    const {uid, email, displayName ,photoURL}= auth.currentUser;
  dispatch(addUser(addUser({uid:uid, email:email, displayName: displayName,photoURL:photoURL})));
    
  // Profile updated!
  // ...
}).catch((error) => {
  setErrorMessage(error.message);
  // An error occurred
  // ...
});
    console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
    else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-" + errorMessage);
  });
    }
  
};

   const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm); //toggle feature true/false
   };
   return (
    <div>
        <Header />
        <div className="absolute">
          <img
          src={BG_URL} alt="Background"
          />
        </div>
        <form onSubmit={(e) => e.preventDefault()}
         className=" absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-90">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
           </h1>
           {!isSignInForm && (
           <input
           ref={name}
           type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800"/>
           )}
          <input
          ref={email}
           type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-800"/>
          <input
          ref={password}
            type="password" placeholder="password" className="p-2 my-4 w-full  bg-gray-800"/>
           <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p> 
            <button 
             className="p-4 my-6 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already registered? Sign In Now"}
               </p>
           
        </form>
    </div>
  )
};
export default Login