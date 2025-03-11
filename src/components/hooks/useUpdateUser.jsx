import { useDispatch } from "react-redux"
import { updateUser } from "../../redux/actions/actions"

const useUpdateUser = ()=>{
    const dispatch = useDispatch()
    return (values)=>{
        localStorage.setItem('user',JSON.stringify(values))
        dispatch(updateUser({values:values}))
    }
}

export default useUpdateUser