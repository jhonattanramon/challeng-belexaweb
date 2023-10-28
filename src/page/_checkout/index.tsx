import HeaderCheckOut from "../../components/_checkout/Header"
import Payment from "../../components/_checkout/Payment"
import CheckoutPayment from "./payment"
import "./style.css"
import CheckoutBag from "./bag"
import CheckoutConfimation from "./confirmation"
import React, { HtmlHTMLAttributes } from "react"



const PageCheckout:React.FC<TypePageCheckout> = ({products}) => {

    const initalState:TypeStatePageCheckout = {
    products:[],
    stateCheckout: "bag",
    methodsPayment: "creditCard",
    datasPayment: {
        creditCard:{
            codeCVV: 0,
            nameCardHolder: "",
            numberCard:0,
            validDate:0
        }
    }
    
    }
    const [statePageCheckout, setStatePageCheckout] = React.useState<TypeStatePageCheckout>(initalState)

    function updateStateCheckout(stateCheckout: StateCheckout){
        setStatePageCheckout( (prevState) => ({
            ...prevState,
            stateCheckout: stateCheckout
        }))
    }

    function updateStateProducts(products:ListProducts){
        setStatePageCheckout( (prevState) => ({
            ...prevState,
            products: products
        }))
    }

    function updateMethodPayment(method: methodsPayment){
        setStatePageCheckout( (prevState) => ({
            ...prevState,
            methodsPayment: method
        }))
    }

    function updateDataslPayment(methodPayment:methodsPayment, values: unknown){
        if(methodPayment === "creditCard"){
            const {codeCVV,nameCardHolder,numberCard,validDate} = values as CreditCard
            setStatePageCheckout( (prevState) => ({
                ...prevState,
                    datasPayment: {
                        creditCard: {
                            codeCVV,
                            nameCardHolder,
                            numberCard,
                            validDate 
                        }
                    }
                }))
                return
            }
    }

    const dataFormCreditCard: CreditCard = {
        codeCVV: 0,
        nameCardHolder: "",
        numberCard: 0,
        validDate: 0
    }

    React.useEffect(() => {        
     updateStateProducts(products)
    },[products])

    function proceedToPayment(){
        updateStateCheckout("payment")
    }

    function finallyPayment(creditCard:CreditCard){
        updateDataslPayment("creditCard", creditCard)
        updateStateCheckout("confimation")
    }

    function backPrototype(){
        updateStateCheckout("bag")
    }

    const handleRenderStateCheckout = (statePageCheckout:TypeStatePageCheckout ) => {
        switch(statePageCheckout.stateCheckout){
            case "bag": 
            return <CheckoutBag 
            listProducts={statePageCheckout.products}
             />
            case "payment":
            return <CheckoutPayment 
            dataForm={dataFormCreditCard}
            methodPayment="creditCard"
            />
            case "confimation": 
            return <CheckoutConfimation
            dataPayment={statePageCheckout}
            methodPayment={statePageCheckout.methodsPayment}
            products={statePageCheckout.products}
            />
            default : return <div style={{  display:"flex", flex: 1, justifyContent:'center', alignItems:"center"}}> <p>ocorreu um error, tente novamente</p> </div>
        }
    }

    const headerButtonBag:HtmlHTMLAttributes<HTMLButtonElement> ={
        onClick: () => updateStateCheckout("bag"),   
    }

    const headerButtonPayment:HtmlHTMLAttributes<HTMLButtonElement> = {
        onClick: () => {
            updateDataslPayment("creditCard",dataFormCreditCard)
            updateStateCheckout("payment")},
    }

    const headerButtonConfirmation:HtmlHTMLAttributes<HTMLButtonElement> ={
        onClick: () => updateStateCheckout("confimation"),
    }

    const buttonPayment :HtmlHTMLAttributes<HTMLButtonElement> ={
            onClick:
             statePageCheckout.stateCheckout === "bag" ?  proceedToPayment 
            :statePageCheckout.stateCheckout === "payment" ? () => finallyPayment(dataFormCreditCard)
            :statePageCheckout.stateCheckout === "confimation" ?  backPrototype : () => {},
            
            title: (
             statePageCheckout.stateCheckout === "bag" ? "serguir para o pagemento"
            :statePageCheckout.stateCheckout === "payment" ? "finalizar pedido"
            :statePageCheckout.stateCheckout === "confimation" ? "Voltar ao inicio do protótipo" : "" ),
            
            style: statePageCheckout.stateCheckout === "confimation" ? {backgroundColor: "#000"} : {}
             
    }
    return statePageCheckout.products.length > 0 ? (
        <div className="pageCheckout">
            <div className="pageCheckout__section">
        <HeaderCheckOut 
        buttonPayment={headerButtonPayment}
        buttonconfimation={headerButtonConfirmation}
        buttonBag={headerButtonBag} 
        stateHeader={statePageCheckout.stateCheckout}/>
        </div>

        <div className="pageCheckout__section pageCheckout__sectionMid">
        {handleRenderStateCheckout(statePageCheckout)}
        </div>

        <div className="pageCheckout__section">
        <Payment
        buttonPayment={buttonPayment}
        products={statePageCheckout.products}/>    
        </div>
        </div>
        ): ( 
            <div>
                <p>Carregando...</p>
            </div>
        )
    
}

export default PageCheckout