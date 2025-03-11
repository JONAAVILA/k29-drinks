import { SAVE_EMAIL, SAVE_USER, UPDATE_USER } from "./actionsTypes"

export function saveEmail(email) {
    return async (dispatch)=>{
        return dispatch({
            type:SAVE_EMAIL,
            payload:email
        })
    }
}
export function saveUser(values) {
    return async (dispatch)=>{
        return dispatch({
            type:SAVE_USER,
            payload:values
        })
    }
}

export function updateUser(values){
    return async (dispatch)=>{
        return dispatch({
            type:UPDATE_USER,
            payload:values
        })
    }
}