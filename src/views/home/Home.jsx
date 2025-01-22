import { Categories, Info, Landing } from "../../components"
import './home.css'

const Home = ()=>{
    return(
        <section className="home_container" >
            <Landing/>
            <Categories/>
            <Info/>
        </section>
    )
}

export default Home