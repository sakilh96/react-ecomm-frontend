import { LOGIN_TOKEN } from "../constants";
import { LOGGED_OUT } from "../constants";

export const getLoginToken = (data) => {
  
    return {
        type: LOGIN_TOKEN,
        data: data
      
    }
}



export const userLogout = () => {
    return {
        type: LOGGED_OUT
    }
}