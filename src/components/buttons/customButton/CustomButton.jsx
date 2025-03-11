import './customButton.css'

const CustomButton = ({children})=>{
    return(
        <>
            <button>
                {children}
            </button>
        </>
    )
}

export default CustomButton