import axios from "axios";

export  function getPerson() {

    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost:5400/api/home/listPerson",
      data: [2014, 2015],
    };
  
     return axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  
  }

  
export  function getPersonEmails(id) {
 // const s =[id, 0]
  const options = {
    method: "POST",
    withCredentials: false,
    url: "https://localhost:8099/api/email",
    data: [id],
  };

   return axios
    .request(options)
    .then((response) => {

      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });

}

  export  function getPersonId( id) {
    const s =[id, 0]
    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost:5400/api/home/getPersonId",
      data: s,
    };
  
     return axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  
  }

  export async function getTop100List( ) {
    const s =[ 0]
    const options = {
      method: "GET",
      withCredentials: false,
      url: "https://localhost:8099/api/top100",
      data: s,
    };
  
     return await axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  
  }

  export  function deletePerson( id) {
    const s =[id, 0]
    const options = {
      method: "DELETE",
      withCredentials: false,
      url: "http://localhost:5400/api/home/deletePerson",
      data: s,
    };
  
     return axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  
  }

  export  function addPerson( person) {
console.log(person.firstName);
    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost:5400/api/home/addPerson",
      data: person,
    };
  
     return axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  
  }

  export  function updatePerson( person) {
    console.log(person.firstName);
        const options = {
          method: "PUT",
          withCredentials: false,
          url: "http://localhost:5400/api/home/updatePerson",
          data: person,
        };
      
         return axios
          .request(options)
          .then((response) => {
            const res = response.data;
            return res;
          })
          .catch(function (error) {
            console.error(error);
          });
      
      }