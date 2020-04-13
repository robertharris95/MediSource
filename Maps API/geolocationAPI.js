import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
      //Need real API key
    return axios.get("https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY");
  }
};