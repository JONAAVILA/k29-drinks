import LoginForm from '../../components/forms/loginForm/LoginForm'
import './login.css'

const Login = ()=>{
    return(
        <section className='login_container' >
            <div>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Login