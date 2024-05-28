import axiosInstance from "./axiosConfig";
import Cookies from "js-cookie";

export const loginRequest = async ({username, password}) => {
    try {
        const response = await axiosInstance.post("login", {username, password});
        Cookies.set('jwt', response.data.token);
        console.log(response);
        return response
    } catch (error) {
        return error;
    }
}

export const createEventRequest = async ({title}) => {
    try {
        const response = await axiosInstance.post("/events", {title});
        return response;
    } catch (error) {
        return error;
    }
}

export const addMember = async (formData) => {
    try {
        const response = await axiosInstance.post("/members", formData);
        return response;
    } catch (error) {
        return error;
    }
}

export const addContribution = async (data) => {
    try {
        const response = await axiosInstance.post("/contributions/", data);
        return response;
    } catch(error) {
        return error;
    }
}