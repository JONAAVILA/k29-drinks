import './landing.css';
import corona from '../../assets/images/corona.png'

const Landing = ()=>{
    return(
        <section className='landing_section' >
            <div>
                <h1 className='landing_heading' >
                    <span className='heading_k29' >K29</span>
                    <span className='heading_drinks' >drinks</span>
                </h1>
                <div className='landing_corona' >
                    <img src={corona} alt="corona" />
                </div>
            </div>
        </section>
    )
}

export default Landing