import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
   const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
   };
  return (
    <div>
        <Header />
        <div className="absolute">
          <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
          alt="Background"
          />
        </div>
        <form className=" absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-90">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
           </h1>
           {!isSignInForm && (
           <input
           type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800"/>
           )}
          <input
           type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-800"/>
          <input
            type="password" placeholder="password" className="p-2 my-4 w-full  bg-gray-800"/>
            <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already registered? Sign In Now"}
               </p>
           
        </form>
    </div>
  )
}

export default Login