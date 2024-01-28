import React from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { firestore, auth } from '../firebase/Config';
import { doc, setDoc } from 'firebase/firestore'; 


interface UserData {
  uid: string;
  email: string;
  userName: string;
  fullName: string;
  bio: string;
  score: number | string;
  createdAt: number;
  profilePicUrl: any
}


export default function UseSignupWithEmailandPassword() { 
  const [
    createUserWithEmailAndPassword, 
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputValue: any) => {
    if (!inputValue.email || !inputValue.password || !inputValue.userName || !inputValue.fullName) { 
      throw new Error("All fields are required");
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputValue.email, inputValue.password);
 
      if (!newUser) {
        console.error("Error creating user: newUser is falsy", error);
        return;
      } 
      const userData: UserData = {
        uid: newUser.user.uid,
        email: inputValue.email,
        userName: inputValue.userName,
        fullName: inputValue.fullName,
        bio: "",
        score: "",
        profilePicUrl: "",
        createdAt: Date.now()
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      localStorage.setItem("user-info", JSON.stringify(userData))

    } catch (error) {
      console.error("Error signing up:", error);
    }

  };

  return { loading, error, signup }; (
    <></>
  )
}
