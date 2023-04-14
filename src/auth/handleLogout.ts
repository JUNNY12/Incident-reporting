import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";
import { NavigateFunction } from "react-router";


export const handleLogout = (navigate:NavigateFunction) => async () => {
    try {
        await auth.signOut();
        toast.success("logged out", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/');
    } catch (error: any) {
        console.log(error);
    }
};