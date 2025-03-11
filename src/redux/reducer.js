import { SAVE_EMAIL, SAVE_USER, UPDATE_USER } from "./actions/actionsTypes";

const initialState = {
    isLogin:false,
    user:{
        seller:'',
        name:'',
        surname:'',
        email:'',
        password:'',
        phone:'',
        address:'',
        number:'',
        location:'',
        state:'',
        country:''
    }
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SAVE_EMAIL:
            return{
                ...state,
                user:{
                    ...state.user,
                    email:action.payload
                }
            }
        case SAVE_USER:
            return{
                ...state,
                user:{
                    ...state.user,
                    seller:action.payload.seller,
                    name:action.payload.name,
                    surname:action.payload.surname,
                    password:action.payload.password,
                    phone:action.payload.phone,
                    address:action.payload.address,
                    number:action.payload.number,
                    location:action.payload.location,
                    state:action.payload.state,
                    country:action.payload.country
                }
            }
        case UPDATE_USER:
            return{
                ...state,
                user:{
                    ...state.user,
                    name:action.payload.values.name,
                    surname:action.payload.values.surname,
                    email:action.payload.values.email,
                    location:action.payload.values.location,
                    country:action.payload.values.country
                }
            }
        default:
            return state
    }
}

export default rootReducer