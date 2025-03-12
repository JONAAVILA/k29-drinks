import { Link } from 'react-router-dom'
import LoginForm from '../../components/forms/loginForm/LoginForm'
import './login.css'

const Login = ()=>{
    return(
        <section className='login_container' >
            <div className='box_login' >
                <h2>BIENVENIDO</h2>
                <LoginForm admin={true} />
            </div>
        </section>
    )
}

export default Login