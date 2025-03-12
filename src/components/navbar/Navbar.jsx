import { Link } from 'react-router-dom'
import Shop from '../buttons/shop/Shop'
import './navbar.css'

const Navbar = ()=>{
    return(
        <aside className='navbar_container' >
            <div className='navbar_box' >
                <div className='navbar_signin' >
                    <Link to={'/login'} >
                        <span>INGRESAR</span>
                    </Link>
                    <Link to={'/signin'} >
                        <span>REGISTRARSE</span>
                    </Link>
                </div>
                <div className='navbar_contact' >
                    <a href="">ENVIOS</a>
                    <a href="">CONTACTO</a>
                    <a href="">PRODUCTOS</a>
                    <Shop/>
                </div>
            </div>
        </aside>
    )
}

export default Navbar