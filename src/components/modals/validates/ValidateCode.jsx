import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useUpdateUser from "../../hooks/useUpdateUser"
import { useFormik } from "formik"
import { validateCode } from "../../../utils/validate"
import confirmCode from "../../../adapters/validations/confirmCode"
import postUser from "../../../adapters/users/postUser"
import refresh from "../../../adapters/validations/refresh"
import setStorage from "../../../utils/setStorage"

const ValidateCode = ({validate,admin,email,password,handleModal})=>{
    const [error, setError] = useState('')
    const [loader, setloader] = useState(false)
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const updateUser = useUpdateUser()

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)
            const code = values.code
            const resConfirm = await confirmCode(code)
        
            if(!validate && resConfirm === true){
                const resCreate = await postUser(user)
                if(resCreate === 'user created') navigate('/home')
                return
            }
            if(validate && resConfirm === true){
                const res = await refresh(password)
                console.log('refresh:',res)
                if(res === 'access'){ 
                    navigate('/home')
                    return
                }
                navigate('/login')
            }
            if(admin){
                console.log('adminUser',user)
                const res = await postAdmin(user)
                if(!res.seller){
                    updateUser(res)
                    setStorage(res)
                    setError('código inválido')
                    return
                }
                navigate('/admin')
            }
            setError('código inválido')
        }
    })

    return(
        <>
            <div className="code_container" onClick={handleModal} />
            <div className="code_box" >
                <h2>VALIDA TU CODIGO</h2>
                {email ? (
                            <h3>te lo enviamos a {email}, revisa tu casilla de spam 😎</h3>
                        ):(
                            <h3>te lo enviamos a {user.email}, revisa tu casilla de spam 😎</h3>
                        )
                    }
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="nombre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_box_load" >
                            {loader && <LoadIcon size={35} />}
                        </div>
                    </div>
                    <ButtonCircle type='submit' color={'natural'}>
                        check
                    </ButtonCircle>
                </form>
                <div className="code_error" >
                    {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>
    )
}

export default ValidateCode