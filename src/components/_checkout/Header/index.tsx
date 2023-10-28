import React, { HTMLAttributes } from 'react'
import './style.css'

interface TypeHeaderCheckout{
    stateHeader: "bag" | "payment" | "confimation"
    buttonBag: HTMLAttributes<HTMLButtonElement>
    buttonPayment: HTMLAttributes<HTMLButtonElement>
    buttonconfimation: HTMLAttributes<HTMLButtonElement>

}

const HeaderCheckout:React.FC<TypeHeaderCheckout> = ({stateHeader,buttonBag,buttonPayment,buttonconfimation}) => {
    return(
        <div className='headerCheckout'> 
            <button 
            {...buttonBag}
            className={`headerCheckout__button ${stateHeader == "bag" ? "headerCheckout__button--selected" : null}`}>
                sacola
            </button>
            <button 
            {...buttonPayment}
            className={`headerCheckout__button ${stateHeader == "payment" ? "headerCheckout__button--selected" : null}`}>
                <p> 
                    pagamento
                </p>
            </button>
            <button 
            {...buttonconfimation}
            className={`headerCheckout__button ${stateHeader == "confimation" ? "headerCheckout__button--selected" : null}`}>
            <p>
                confimação
            </p>
            </button>
        </div>
    )
}

export default HeaderCheckout