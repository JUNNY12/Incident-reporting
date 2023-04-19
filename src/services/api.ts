import axiosInstance from "../axios/axios";
import { IncidentType } from "../context/userIncidentContext";




const auth: string = import.meta.env.VITE_REACT_APP_AUTH_KEY;

export const getUserIncidents = async (uid: string) => {
    try {
        const response = await axiosInstance.get(`users/${uid}/incidents.json?auth=${auth}`);
        let incidents: IncidentType[] = [];
        for (const key in response.data) {
            incidents.push({ ...response.data[key], id: key })
        }
        incidents.reverse();
        return incidents;
    } catch (error: any) {
        console.log(error);
    }
};

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
                allIncidents.reverse();
            }
        }
        console.log(allIncidents);
        return allIncidents;
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
