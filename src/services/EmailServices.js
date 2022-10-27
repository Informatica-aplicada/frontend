import axios from "axios";
const url = "http://localhost:7000/email";

// export async function getPersons() {
//   return await axios.get(url).then((res) => {
//     const response = res.data;
//     return response;
//   });
// }

export async function getPersons() {
  const options = {
    method: "GET",
    withCredentials: false,
    url: url,
  };

  return await axios.request(options).then((res) => {
    const response = res.data;
    return response;
  });
}

export async function getEmails(id) {
  return axios.get(url + `/` + id).then((res) => {
    return res.data;
  });
}

export async function save(id, emails) {
  // return await axios
  //   .post(url, email)
  //   .then((response) => console.log(response))
  //   .catch((error) => {
  //     console.error("There was an error!", error);
  //   });

  for (var email of emails) { 
    if (email.businessEntityID === "") { 
      email.businessEntityID = id;
      email.accion = 0;
      email.emailId = 0;
      
    }
  }

  const options = {
    method: "POST",
    withCredentials: false,
    url: url,
    data: emails,
  };

  return await axios
    .request(options)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.error(error);
    });
}
