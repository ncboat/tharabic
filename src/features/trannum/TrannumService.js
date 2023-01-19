import axios from "axios";
const API_URLENTH = "https://app.rmutp.ac.th/convert/api/TransNumArToThai";
const API_URLTHEN = "https://app.rmutp.ac.th/convert/api/TransNumThaiToAr";

const arotothai = async(TextInput)=>{
  const config = {
    headers: {
      'Content-Type': "multipart/form-data",
    },
  };

  const response = await axios.post(API_URLENTH,TextInput,config);
  return response.data;
}

const thaitoaro = async(TextInput)=>{
  const config = {
    headers: {
      'Content-Type': "multipart/form-data",
    },
  };

  const response = await axios.post(API_URLTHEN,TextInput,config);
  return response.data;
}


const numService = {
  arotothai,
  thaitoaro,
};

export default numService;