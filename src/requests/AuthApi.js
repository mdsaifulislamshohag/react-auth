import axios from "axios";
import {Alert} from "../misc/common";
import Manifest from "../manifest";

const apiBase = Manifest.apiBaseUrl;

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "*/*";

export function getAccessToken () {
    if (localStorage.getItem("userToken")) {
        const accessToken = localStorage.getItem("userToken");
        return JSON.parse(accessToken);
    }
}

// Login
export async function LOGIN(object) {
    try {
        let result = await axios.post(`${apiBase}/login`, object);

        if (result.data) {
            return result.data;
        } else {
            Alert("Oops!", "Something went wrong!", "error");
        }
    } catch (error) {
        console.log(error);
    }
}

// Register
export async function REGISTER(object) {
    try {
        let result = await axios.post(`${apiBase}/register`, object);

        if (result && result.data) {
            return result.data;
        } else {
            Alert("Oops!", "Something went wrong!", "error");
        }
    } catch (error) {
        if(error && error.response && error.response.data) {
            return({
                status: "failed",
                message: error.response.data.errors[0].msg
            })
        }else {
            console.log("Error: ", error)
        }
    }
}