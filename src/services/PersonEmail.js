import axios from "axios";


export async function getEmailPerson(id){
    const s =[id, 0]
    var options = {
      method: 'POST',
      url: 'http://localhost:5400/api/home/listEmail',
      data: s
    };
    
    return await axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
      
    });
}


export async function sp_crudEmail(Email){

    var options = {
      method: 'POST',
      url: 'http://localhost:5400/api/home/crudEmail',
      data: Email
    };
    
    return await axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
      
    });
}