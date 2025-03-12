import corona from '../../assets/images/corona.png'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import './landing.css';

const Landing = ()=>{
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Actualiza la posición del scroll
            // Verificar si el usuario llegó al final de la página
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setIsAtBottom(true); // Si está en el final, activar la animación de movimiento hacia la izquierda
            } else {
                setIsAtBottom(false); // Si no está al final, vuelve al centro
            }
            };
  
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    },[])

    return(
        <section className='landing_section' >
            <div>
                <h1 className='landing_heading' >
                    <span className='heading_k29' >K29</span>
                    <span className='heading_drinks' >drinks</span>
                </h1>
                <div className='landing_corona' >
                    <motion.div
                        className='motion_corona'
                        initial={{x:"0%",y:"0%"}}
                        animate={{
                            x:isAtBottom ? "-200%" : scrollPosition / 2.5,
                            y:isAtBottom ? "50%" : null,
                            rotate:isAtBottom ? 0 : scrollPosition / 60,
                            scale:isAtBottom ? 1 : 1 + scrollPosition / 2000,
                            opacity:isAtBottom ? 0.5 : 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                    >
                        <motion.img
                            className='image_corona'
                            src={corona}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Landing