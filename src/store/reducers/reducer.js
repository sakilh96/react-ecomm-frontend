import { LOGIN_TOKEN } from "../constants";
import { LOGGED_OUT } from "../constants";

const initialState = {
    userToken : [],
    isAuthenticated : false,
}

const userReducers = (state = initialState, action) => {

     switch(action.type) {

        case LOGIN_TOKEN:
    
            return {
                ...state,
                userToken: action.data,
                isAuthenticated: true
            }

        case LOGGED_OUT:
            return {
                ...state,
                userToken: null,
                isAuthenticated: false
            }

            default:
                return state;
         
     }
}



export default userReducers;