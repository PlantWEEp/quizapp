import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase/Config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface LoginInput {
  email: string;
  password: string;
}

export default function UseLogin() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const login = async (inputValue: LoginInput) => {
    if (!inputValue.email || !inputValue.password) {
      throw new Error("Email and password are required");
    }

    try {
      const userCred = await signInWithEmailAndPassword(inputValue.email, inputValue.password);

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) { 
          localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        } else { 
          console.error("User data not found");
        }
 
        navigate("/home");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; 
    }
  };

  return { login };
}
