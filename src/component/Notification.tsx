import { toast, ToastContainer } from 'react-toastify'
import { onMessageListener } from '../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { useEffect, useState } from 'react'




interface NotificationState {
    title: string;
    body: string;
}

interface FcmPayload {
    notification: {
        title: string;
        body: string;
    };
}

export const Notification = () => {
    const [user] = useAuthState(auth);
    const [notification, setNotification] = useState<NotificationState>({ title: '', body: '' });
    function ToastDisplay() {
        return (
            <div>
                <h2 className='text-center font-bold '>{notification?.title}</h2>
                <p>{notification?.body}</p>
            </div>
        );
    };

    const notify = () => {
        toast(<ToastDisplay />, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    useEffect(() => {
        if (notification?.title) {
            notify()
        }
    }, [notification])

    //type guard
    function isFcmPayload(payload: unknown): payload is FcmPayload {
        return (
            typeof payload === 'object' &&
            payload !== null &&
            'notification' in payload &&
            typeof payload.notification === 'object' &&
            payload.notification !== null &&
            'title' in payload.notification &&
            typeof payload.notification.title === 'string' &&
            'body' in payload.notification &&
            typeof payload.notification.body === 'string'
        );
    }
    // update notification state when a new notification is received
    onMessageListener()
        .then((payload) => {
            if (isFcmPayload(payload)) {
                setNotification({ title: payload.notification.title, body: payload.notification.body });
            }
        })
        .catch((err) => console.log('failed: ', err));

    return <ToastContainer />
}