import axiosInstance from "../axios/axios";
import { IncidentType } from "../context/userIncidentContext";
import axios from "axios"



const auth: string = import.meta.env.VITE_REACT_APP_AUTH_KEY;
const server_key: string = import.meta.env.VITE_FIREBASE_SERVER_KEY

export const getUserIncidents = async (uid: string) => {
    try {
        const response = await axiosInstance.get(`users/${uid}/incidents.json?auth=${auth}`);
        let incidents: IncidentType[] = [];
        for (const key in response.data) {
            incidents.push({ ...response.data[key], id: key })
        }
        const reversedIncidents = incidents.reverse();
        return reversedIncidents;
    } catch (error: any) {
        console.log(error);
    }
};

export const deleteIncident = async (uid: string| undefined, id: string| undefined) => {
    try{
        const response = await axiosInstance.delete(`users/${uid}/incidents/${id}.json?auth=${auth}`);
        return response;
    }
    catch(error: any){
        console.log(error);
    }
}

export const getAllIncidents = async () => {

    try {
        const response = await axiosInstance.get(`users.json?auth=${auth}`);
        let allIncidents: IncidentType[] = [];
        //loop through users
        for (const userKey in response.data) {
            const user = response.data[userKey];
            // console.log(user, userKey);

            //loop through incidents
            for (const incidentKey in user.incidents) {
                //getting each incident with the key
                const incident = user.incidents[incidentKey];
                //   console.log(incident)
                //pushing the incident to the allIncidents array and the key as id
                allIncidents.push({ ...incident, id: incidentKey });
            }
        }
        const incidents = allIncidents.reverse();
        // console.log(allIncidents);
        return incidents;
    } catch (error: any) {
        console.log(error);
    }
}

export const postIncident = async (uid: string, body: IncidentType) => {
    try {
        const response = await axiosInstance.post(`users/${uid}/incidents.json?auth=${auth}`, body);
        return response;
    } catch (error: any) {
        console.log(error);
        throw new Error('Error posting incident');
    }
};

export const updateUserNotificationToken = async (uid: string | undefined, token: string) => {
    try {
        const response = await axiosInstance.patch(`users/${uid}/notificationToken.json?auth=${auth}`, { token });
        return response;
    } catch (error: any) {
        console.log(error);
        throw new Error('Error posting notification token');
    }
};


export const getTokens = async () => {
    try {
        const response = await axiosInstance.get(`users.json?auth=${auth}`);
        let tokens: string[] = [];
        for (const key in response.data) {
            const token = response.data[key].notificationToken.token;
            if (token) {
                tokens.push(token);
            }
        }
        // console.log(tokens)
        return tokens;
    } catch (error: any) {
        console.log(error);
    }
}


export const getUserToken = async (uid: string) => {
    try {
        const response = await axiosInstance.get(`users/${uid}/notificationToken.json?auth=${auth}`);
        // console.log(response.data.token);
        return response.data.token;
    } catch (error: any) {
        console.log(error);
    }
}

export const sendNotification = async (uid: string) => {

    const Alltokens = await getTokens();
    const userToken = await getUserToken(uid);

    const tokensToSendNotification = Alltokens?.filter(token => token !== userToken);
    const message = {
        "notification": {
            "title": "New Incident",
            "body": "There is a new incident report",
            "click_action": "https://incident-reporting.vercel.app/incident",
            "sound": "default",
        },
        "registration_ids": tokensToSendNotification,
        "android": {
            "ttl": "86400s",
            "notification": {
                "click_action": "https://incident-reporting.vercel.app/incident",
            }
        },
        "apns": {
            "headers": {
                "apns-priority": "5",
            },
        }
    }

    try {
            const response = await axios.post('https://fcm.googleapis.com/fcm/send', message, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${server_key}`
                }
            });
            // console.log("Notification sent successfully");
            console.log(response.data);
        } catch(error) {
            console.log(error);
        }
    };

