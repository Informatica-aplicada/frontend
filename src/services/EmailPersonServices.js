import axios from "axios";
const url = "https://purchase-microservices.azurewebsites.net/shipped";

const url2 = "http://localhost:5286/api/EmailPerson";
const url3 = "https://localhost:443/api/person";

export async function getListEmail() {
  return await axios.get(url3+`/list`).then((res) => {
    const response = res.data;
    return response;
  });
}

export async function getForIdEmail(id) {
  return await axios.get(url3+`/`+id).then((res) => {
    const response = res.data;
    return response.response;
  });
}

export async function saveEmail(address) {
  console.log("id: ",address);
   return await axios
     .post(url3+`/crudPerson`, address)
     .then((response) => console.log(response))
     .catch((error) => {
       console.error("Error al guardar!", error);
     });
}

export async function deletedEmail(id) {
  return await axios.delete(url3+`/delete/`+id).then((res) => {
    return res.status;
  });
}


export async function updateEmail(address) {

  return await axios.put(url3+`/editPerson`,address).then((res) => {  
    return res.status;
  });
}