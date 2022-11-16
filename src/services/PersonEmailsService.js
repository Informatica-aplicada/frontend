import axios from "axios";

export async function getPersonEmails() {

    const options = {
      method: "GET",
      withCredentials: false,
      url: "https://localhost:7000/emails",
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

  export async function getEmails(id) {

    const options = {
      method: "GET",
      withCredentials: false,
      url: "https://localhost:7000/emails/"+id,
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

  export async function actionEmails(data) {

    for(let emailData of data){
      if (emailData.optionAction === 1 || emailData.optionAction === 2){

        console.log(emailData);

        const options = {
          method: "POST",
          withCredentials: false,
          url: "https://localhost:7000/emails",
          data: emailData
        };
      
         await axios
          .request(options)
          .then((response) => {
            const res = response.data;
            console.log(res);
          })
          .catch(function (error) {
            console.error(error);
          });

      }
    }

  }

  /*export  function updateEmail() {
        const options = {
          method: "PUT",
          withCredentials: false,
          url: "https://localhost:7000/emails",
        };
      
         return axios
          .request(options)
          .then((response) => {
            const res = response.data;
            console.log(res);
            return res;
          })
          .catch(function (error) {
            console.error(error);
          }); 
      }

      export  function deleteEmail() {
        const options = {
          method: "DELETE",
          withCredentials: false,
          url: "https://localhost:7000/emails",
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
      }*/