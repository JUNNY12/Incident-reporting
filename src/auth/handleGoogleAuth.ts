import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase/firebase";
import { checkGoogleError } from "../utility/checkError";
import { NavigateFunction } from "react-router";
import { toast } from "react-toastify";
import { requestPermission } from "../utility/requestPermission";

const provider = new GoogleAuthProvider();

// This function is called when the user clicks on the Google button
export const handleGoogleAuth = (navigate: NavigateFunction) => async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const uid = user.uid;
    // console.log(uid);
    // console.log(user?.uid);
    toast.success("You have successfully logged in",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    navigate('/report');
    requestPermission(uid)
    
  } catch (error: any) {
    console.log(error);
    checkGoogleError(error.code);
  }
};
