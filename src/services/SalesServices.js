import axios from "axios";

export  function getReport1(years) {
  const options = {
    method: "POST",
    withCredentials: false,
    url: "http://localhost:5400/api/home/report1",
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

  //  axios
  //    .post(`http://localhost:5400/api/home/report1`, years)
  //    .then((response) => console.log(response))
  //    .catch((error) => {
  //      console.error("There was an error!", error);
  //    });
}
