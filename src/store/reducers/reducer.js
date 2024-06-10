import { LOGIN_TOKEN } from "../constants";

const initialState = {
    userToken : [],
}

const userReducers = (state = initialState, action) => {
    //  console.log('reducers',action);
     switch(action.type) {

        case LOGIN_TOKEN:
            console.log('reducers LOGIN_TOKEN',action);
            // console.log('hello');
            return {
                ...state,
                userToken: action.data
            }
            default:
                return state;
         
     }
}



export default userReducers;