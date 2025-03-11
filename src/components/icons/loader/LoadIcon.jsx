import { ping } from 'ldrs'

const LoadIcon = ({size})=>{
    ping.register()
    return(
        <>
            <l-ping
            size={size}
            speed="3" 
            color="#3d3d3d" 
            ></l-ping>
        </>
    )
}

export default LoadIcon