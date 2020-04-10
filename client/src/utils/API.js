import axios from "axios";

export default {
    registerUser: function(userData){
        return axios.post("/api/data/", userData)
    },
    // loginAttempt: function(fieldData){
    //     return axios.
    // }
}