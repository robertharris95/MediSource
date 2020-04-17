import axios from "axios";
export default {
    getDB: function () {
        return axios.get("/api/data");
    },
    session: function(){
        return axios.get("/api/data/session");
    },
    registerUser: function(userData){
        return axios.post("/api/data/new", userData)
    },
    loginAttempt: function(fieldData){
        return axios.post("/api/data", fieldData)
    },
    postUser: function(postObj){
        return axios.post("/api/data/newPost", postObj)
    },
    // imageData: function(form){
    //     return axios.post("/api/uploads")
    // }
}