import { Link } from 'react-router-dom'
import LoginForm from '../../components/forms/loginForm/LoginForm'
import './login.css'

const Login = ()=>{
    return(
        <section className='login_container' >
            <div className='box_login' >
                <h1>BIENVENIDO</h1>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Login