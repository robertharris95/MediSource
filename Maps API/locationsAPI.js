import axios from "axios";
export default {
// Gets Lat&Long
getLat: function(zip) {
        const key = process.env.REACT_APP_GEO_API_KEY
          //Need real API key
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${key}`);
      }.then(this.getHospitals(res))
    
  // Gets all hosptials
,getHospitals: function() {
    const key = process.env.REACT_APP_GEO_API_KEY
      //Need real API key
    return axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&radius=32187&location=${res.geometry.location.lat},${res.geometry.location.long}&rankby=distance&type=hospital&key=${key}`);
  }
};