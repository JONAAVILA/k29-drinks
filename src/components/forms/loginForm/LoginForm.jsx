import { useFormik } from "formik"
import { validateLogin } from "../../../utils/validate"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoadIcon from "../../icons/loader/LoadIcon"
import postLogin from "../../../adapters/users/postLogin"
import setStorage from "../../../utils/setStorage"
import useUpdateUser from "../../hooks/useUpdateUser"
import adminLogin from "../../../adapters/admins/adminLogin"
import sendCode from "../../../adapters/validations/sendCode"
import Alert from "../../modals/alerts/Alert"
import CustomButton from "../../buttons/customButton/CustomButton"
import './loginForm.css'

const LoginForm = ({admin})=>{
    const navigate = useNavigate()
    const [alert, setalert] = useState('')
    const [loader, setLoader] = useState(false)
    const [modal, setmodal] = useState(false)
    const updateUser = useUpdateUser()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            setLoader(!loader)
            console.log('admin',admin)
            if(!admin){
                const res = await postLogin(values)
                if(res.name){
                    setStorage(res)
                    updateUser(res)
                    navigate('/home')
                    return
                }
            }
            const res = await adminLogin(values)
            console.log('seller',res)
            if(res.name){
                setStorage(res)
                updateUser(res)
                navigate('/admin')
                return
            }
            if(res === 'validate user'){
                const codeRes = await sendCode()
                if(codeRes.error) {
                    setalert(codeRes.error)
                    return
                }
                setmodal(!modal)
                return
            }
            setalert('Clave o correo incorrecto')
            setLoader(false)
            return
        }
    })

    const handleAlert = ()=>{
        setalert('')
    }

    return(
        <div>
            <div className="box_loader" >
                {loader && <LoadIcon size={80} />}
            </div>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {modal && <ValidateCode validate={true} admin={admin} email={formik.values.email} password={formik.values.password} />}

            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="email"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="password"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div>
                    <CustomButton type='submit' >
                        LOGIN
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default LoginForm