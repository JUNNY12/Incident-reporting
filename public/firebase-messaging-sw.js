
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: "AIzaSyBkRJBBfBCfvlc5kAo_TXgf4ZRnxnr52Yk",
    authDomain: "incident-reporting-383016.firebaseapp.com",
    projectId: "incident-reporting-383016",
    storageBucket: "incident-reporting-383016.appspot.com",
    messagingSenderId: "420938616960",
    appId: "1:420938616960:web:7fd07b213979e0cb9d1665",
    measurementId: "G-0DJ8MHL53B"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload?.notification?.title;
    const notificationOptions = {
        body: payload?.notification?.body,
        icon: payload?.notification?.image,
    }

    self.registration.showNotification(notificationTitle, notificationOptions);
})

