import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_POST_USER_DEV = import.meta.env.VITE_URL_POST_USER_DEV
const VITE_URL_POST_USER_PRODUCTION = import.meta.env.VITE_URL_POST_USER_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_POST_USER_PRODUCTION : VITE_URL_POST_USER_DEV

export default async function postUser(values){
    try {
        const user = await axios.post(URL,values,{
            withCredentials:true
        })
        console.log(user.data)
        return user.data
    } catch (error) {
        console.log(error.response.data.error)
    }
}