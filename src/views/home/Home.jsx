import { Categories, Landing } from "../../components"
import './home.css'

const Home = ()=>{
    return(
        <section className="home_container" >
            <Landing/>
            <Categories/>
        </section>
    )
}

export default Home