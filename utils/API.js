import axios from "axios";

export default {
  submitChoice: function(choice) {
    return axios.post("/answer", choice);
  },
  getPollData: function() {
    return axios.post("/answers");
  }
};
