import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_LOGIN_DEV = import.meta.env.VITE_URL_LOGIN_DEV
const VITE_URL_LOGIN_PRODUCTION = import.meta.env.VITE_URL_LOGIN_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_LOGIN_PRODUCTION : VITE_URL_LOGIN_DEV

export default async function postLogin(values){
    const user = {
        email:values.email,
        password:values.password
    }

    const res = await axios.post(URL,user,{
        withCredentials:true
    })
    console.log('postlogin:',res.data)
    return res.data
}