import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    const key = process.env.REACT_APP_GEO_API_KEY
      //Need real API key
    return axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`);
  }
};