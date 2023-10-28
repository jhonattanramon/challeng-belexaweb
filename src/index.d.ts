interface Product{
    name: string,
    image: string;
    description: string;
    price: number,
    sale: boolean;
    sale_price?: number  
}


type ListProducts = Product[]

interface TypePageCheckout{
    products: ListProducts
}
type StateCheckout =  "bag" |  "payment" | "confimation"
type methodsPayment = "creditCard"
interface CreditCard{
    numberCard: number;
    nameCardHolder: string;
    validDate: number;
    codeCVV:number;
}
interface TypeStatePageCheckout{
    stateCheckout:StateCheckout,
    products: ListProducts
    methodsPayment: methodsPayment,
    datasPayment: {
        creditCard: CreditCard
}}
