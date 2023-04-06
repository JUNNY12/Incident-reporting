import axiosInstance from "../axios/axios";

export interface Incident {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    status: string;
}

export const getIncidents = async () => {
    return await axiosInstance.get("/incidents");
};

export const postIncident = async (incident: Incident) => {
    return await axiosInstance.post("/incidents", incident);
}