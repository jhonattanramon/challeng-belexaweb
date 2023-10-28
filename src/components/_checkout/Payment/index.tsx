import React, { HtmlHTMLAttributes } from 'react'
import './style.css'


interface TypePayment {
  products: ListProducts;
  buttonPayment: HtmlHTMLAttributes<HTMLButtonElement>
}

interface TypeStatePayment {
  priceProducts: number;
  freight: number;
  discount: number;
  subtotal: number;
}


const Payment: React.FC<TypePayment> = ({ products,buttonPayment }) => {
 

  const initialState: TypeStatePayment = {
    discount: 10,
    freight: 20,
    priceProducts: 0,
    subtotal: 0
  }

  const [statePayment, setStatePayment] =
   React.useState<TypeStatePayment>(initialState)

  function updateState(priceProducts: number) {
    setStatePayment((prevState) => ({
      ...prevState,
      priceProducts: prevState.priceProducts + priceProducts
    }))
  }

  function totalPrice(products: ListProducts) {
    products.forEach(({ price, sale_price }) => {
      if (sale_price) {
        updateState(sale_price)
        return
      }

      updateState(price)
    })
  }

  function subTotalPrice(state: TypeStatePayment){

    const subTotal = state.priceProducts + state.freight - state.discount
    console.log(subTotal);
    
    setStatePayment( 
        (prevState) => ({
            ...prevState,
            subtotal: subTotal
        })
    )
  }

  React.useEffect(() => {
    totalPrice(products)
    
  }, [products])


  React.useEffect( () => {
    subTotalPrice(statePayment)
  },[statePayment.priceProducts])

  return (
    <div className="payment">
      <div className="payment__sections">
        <span>produtos:({products.length} items)</span>
        <span>R$ {statePayment.priceProducts.toFixed(2)}</span>
      </div>

      <div className="payment__sections">
        <span>frete:</span>
        <span>R$ {statePayment.freight.toFixed(2)}</span>
      </div>

      <div className="payment__sections">
        <span className="payment__discount">desconto:</span>
        <span className="payment__discount">R$ {statePayment.discount.toFixed(2)}</span>
      </div>

      <div className="payment__sections">
        <span className="payment__subtotal">subtotal:</span>
        <span className="payment__subtotal">R$ {statePayment.subtotal.toFixed(2)}</span>
      </div>

      <div className="payment__sections payment__containerButton">
        <button 
        {...buttonPayment}
        className="payment__button">{buttonPayment.title}</button>
      </div>
    </div>
  )
}

export default Payment
