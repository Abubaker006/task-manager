import Cookies from "js-cookie";

 const getAuthToken=()=>{
  return  Cookies.get("token");
};

 const removeAuthToken=()=>{
  return  Cookies.remove("token");
};

export {getAuthToken, removeAuthToken};