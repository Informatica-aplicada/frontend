import axios from "axios";
const url = "http://localhost:7000/email";

export async function getPersons() {
  return await axios.get(url).then((res) => {
    const response = res.data;
    return response;
  });
  }

  export async function getEmails(id) {
    return axios.get(url+`/`+id).then((res) => {
      
        return res.data;
      });
  }

  export async function save(email) {
     return await axios
       .post(url, email)
       .then((response) => console.log(response))
       .catch((error) => {
         console.error("There was an error!", error);
       });
  }