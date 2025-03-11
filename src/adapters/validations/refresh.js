import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_REFRESH_DEV = import.meta.env.VITE_URL_REFRESH_DEV
const VITE_URL_REFRESH_PRODUCTION = import.meta.env.VITE_URL_REFRESH_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_REFRESH_PRODUCTION : VITE_URL_REFRESH_DEV

export default async function refresh(password) {
    const res = await axios.post(URL,{password:password},{
        withCredentials:true
    })
    return res.data
}