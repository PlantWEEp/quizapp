import React, { useState } from 'react'
import UseLogin from '../hooks/UseLogin'
import { useNavigate } from 'react-router-dom'

interface userInput { 
  email: string,
  password: string
}

export default function SignIn() {

  const [inputValue, setinputValue] = useState<userInput>({ 
    email: "",
    password: ""
  })

  const {login,error}:any = UseLogin()
  const navigate = useNavigate()


  const handleSignup = async () => {
    await login(inputValue);   
  };

  return (
    <>
      <div className='flex justify-center w-[40%] flex-col h-screen items-center mx-auto'>
        <div className='mb-5 items-start'>
          <h3>signin </h3>
        </div>
        <div className='flex flex-col gap-2'>  
          <label>Enter your email</label>
          <input
            className='text-black'
            value={inputValue.email}
            type='email'
            onChange={(e) => setinputValue({ ...inputValue, email: e.target.value })}
          />
          <label>Enter your password</label>
          <input
            value={inputValue.password}
            type='password'
            className='text-black'
            onChange={(e) => setinputValue({ ...inputValue, password: e.target.value })}
          />
          <button className='bg-button-base px-3 py-2' onClick={handleSignup} >Sign in</button>
          {error && (
            console.log("button",error.message)
          )}
        </div>
      </div>
    </>
  )
}
