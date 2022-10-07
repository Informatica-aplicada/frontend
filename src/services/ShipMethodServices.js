import axios from "axios";
const url = "https://purchase-microservices.azurewebsites.net/shipped";

export async function getShipMethodList() {
    return await axios.get(url).then((res) => {
      const response = res.data;
      return response;
    });
  }

  export async function getForId(id) {

    return axios.get(url+`/`+id).then((res) => {
      
      return res.data;
    });
  }

  export async function deleted(id) {
    return axios.delete(url+`/`+id).then((res) => {
      window.location = "/";
      return res.data;
    });
  }


  export async function update(shipped) {

    return axios.put(url,shipped).then((res) => {  
    });
  }

  export async function save(shipped) {
   
    return axios.post(url,shipped).then((res) => { 
    });
  }