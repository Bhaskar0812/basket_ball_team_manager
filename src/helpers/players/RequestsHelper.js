import axios from 'axios';
import qs from 'qs';

export const axiosGet = async (url) => {
  var response = await axios.get(url).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}
