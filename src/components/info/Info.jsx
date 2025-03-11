import './info.css'
import bag from '../../assets/images/k29-bolsa.webp'

const Info = ()=>{
    return(
        <section className='info_section' >
            <picture>
                <img className='info_image_bag' src={bag} alt="" />
            </picture>
            <div className='info_box_heading' >
                <div>
                    <h3>HACÉ TU PEDIDO Y LO TENES FRÍO</h3>
                    <p>hacemos envíos en zona sur en menos de 60 minutos</p>
                </div>
                <div>
                    <h3>PODÉS PEDIR DE CUALQUIER PARTE DEL PAÍS</h3>
                    <p>trabajamos con mercado libre flex, contas con que tu pedido llega a destino de forma segura</p>
                </div>
            </div>
        </section>
    )
}

export default Info