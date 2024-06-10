import { LOGIN_TOKEN } from "../constants";

export const getLoginToken = (data) => {
    // console.log('action',data);
    return {
        type: LOGIN_TOKEN,
        data: data
      
    }
}