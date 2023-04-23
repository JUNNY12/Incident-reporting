import { getToken } from "firebase/messaging"
import { updateUserNotificationToken } from "../services"
import { messaging } from "../firebase/firebase"
import { toast } from "react-toastify"


export async function requestPermission(uid: string | undefined) {
    const permission = await window.Notification.requestPermission()

    //asking for permission
    if (permission === 'granted') {
        //get token
        const token = await getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
        console.log('token is', token)

        console.log(uid)
        console.log('Permission granted')

        //update token in db
        if (uid) {
            try {
                await updateUserNotificationToken(uid, token)
            } catch (error) {
                console.log(error)
            }
        }
    }

    else if (permission === 'denied') {
        toast.info('Allow notification to receive update from this web app', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        console.log('Permission denied')
    }

}
