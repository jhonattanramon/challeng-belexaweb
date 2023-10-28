import ViwerProduct from "../../../components/_checkout/ViewerProduct"

interface TypeCheckoutBag{
    listProducts: ListProducts
}

const CheckoutBag:React.FC<TypeCheckoutBag> = ({listProducts}) => {
   
    return(
        <ViwerProduct isShowPrice={true}  isTitle={true} listProducts={listProducts}/> 
    )
}

export default CheckoutBag