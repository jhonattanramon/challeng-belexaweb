import React from "react"
import CardConfirmationBuy from "../../../components/_checkout/CardConfimationBuy"
import ViwerProduct from "../../../components/_checkout/ViewerProduct"
import "./style.css"

interface TypeCheckoutConfimation{
    products: ListProducts
    dataPayment: TypeStatePageCheckout;
    methodPayment: methodsPayment;
}

const CheckoutConfimation:React.FC<TypeCheckoutConfimation> = ({products,dataPayment,methodPayment}) => {    
    const {codeCVV,nameCardHolder,numberCard,validDate} = dataPayment.datasPayment[methodPayment] as CreditCard 
    console.log(numberCard);
    
    return(
        <div className="checkoutConfimation">
            <CardConfirmationBuy 
            codeOrde={`${numberCard}`}
            date={`${validDate}`}
            message="pedido confimado"
            name={nameCardHolder}
            />

            <ViwerProduct 
            isShowPrice={false}
            isTitle={false}
            listProducts={products} 
            />
        </div>
    )
}

export default CheckoutConfimation