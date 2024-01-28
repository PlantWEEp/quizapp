import React, { useState } from 'react';
import UseSignupWithEmailandPassword from '../hooks/UseSignupWithEmailandPassword';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface userInput {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

export default function Registerpage() {
  const [inputValue, setinputValue] = useState<userInput>({
    fullName: "",
    userName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  
  const { error, signup }: any = UseSignupWithEmailandPassword();

  const handleSignup = async () => {
    await signup(inputValue);
    // toast.success("Resgister Successfully")
    navigate("/signin");
  };

  return (
    <>
      <div className='flex justify-center w-[40%] flex-col h-screen items-center mx-auto'>
        <div className='mb-5 items-start'>
          <h3>Register </h3>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Enter your full name</label>
          <input
            className='text-black'
            value={inputValue.fullName}
            type='text'
            onChange={(e) => setinputValue({ ...inputValue, fullName: e.target.value })}
          />
          <label>Enter your username</label>
          <input
            className='text-black'
            value={inputValue.userName}
            type='text'
            onChange={(e) => setinputValue({ ...inputValue, userName: e.target.value })}
          />
          <label>Enter your email</label>
          <input
            className='text-black'
            value={inputValue.email}
            type='email'
            onChange={(e) => setinputValue({ ...inputValue, email: e.target.value })}
          />
          <label>Enter your password</label>
          <input
            className='text-black'
            value={inputValue.password}
            type='password'
            onChange={(e) => setinputValue({ ...inputValue, password: e.target.value })}
          />
          <button className='bg-button-base px-3 py-2' onClick={handleSignup}>Sign in</button>
          {error && (
            console.log("button",error.message)
          )}
        </div>
      </div>
    </>
  );
}
