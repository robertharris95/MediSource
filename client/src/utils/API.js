import axios from "axios";
import passport from "passport";

export default {
    getDB: function () {
        return axios.get("/api/data");
    },
    registerUser: function(userData){
        return axios.post("/api/data/new", userData)
    },
    loginAttempt: function(fieldData){
        return axios.post("/api/data", fieldData)
    },
<<<<<<< HEAD
    postUser: function(postObj){
        return axios.post("/api/data/newPost", postObj)
=======
    PostUser: function(userData){
         return console.log("post!")
        // return axios.post("/api/data/new", userData)
>>>>>>> c70b6356e2be4a2f51ec6da1c8b807f79695b9e3
    }
}