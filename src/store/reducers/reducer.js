import { LOGIN_TOKEN } from "../constants";
import { LOGGED_OUT } from "../constants";

const initialState = {
    userToken : [],
}

const userReducers = (state = initialState, action) => {

     switch(action.type) {

        case LOGIN_TOKEN:
    
            return {
                ...state,
                userToken: action.data
            }

        case LOGGED_OUT:
            return {
                ...state,
                userToken: null
            }

            default:
                return state;
         
     }
}



export default userReducers;