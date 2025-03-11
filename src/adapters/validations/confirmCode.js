import axios from "axios"

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_CHECK_CODE_DEV = import.meta.env.VITE_URL_CHECK_CODE_DEV
const VITE_URL_CHECK_CODE_PRODUCTION = import.meta.env.VITE_URL_CHECK_CODE_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CHECK_CODE_PRODUCTION : VITE_URL_CHECK_CODE_DEV

export default async function confirmCode(code){
    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   