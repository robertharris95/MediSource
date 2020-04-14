import axios from "axios";

export default {
    getDB: function () {
        return axios.get("/api/data");
    },
    registerUser: function(userData){
        return axios.post("/api/data/", userData)
    },
    loginAttempt: function(fieldData){
        return axios.post("/api/data", fieldData)
    }
}