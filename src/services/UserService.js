import instanceAxios from "./AxiosInstance";

const userService = {
    signUp: async (data) => {
        const postData = await instanceAxios.post('signup',data);
        return postData;
    },
    logIn: async (data) => {
        const postData = await instanceAxios.post('login',data);
        return postData;
    }
}

export default userService;