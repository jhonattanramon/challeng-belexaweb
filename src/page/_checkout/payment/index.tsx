import React from 'react'
import './style.css'
import Input from '../../../components/Input'

type methodsPayment = 'creditCard'

interface CreditCard {
  numberCard: number;
  nameCardHolder: string;
  validDate: number;
  codeCVV: number;
}

interface TypeCheckoutPayment {
  methodPayment: methodsPayment;
  dataForm: CreditCard;
}



const CheckoutPayment: React.FC<TypeCheckoutPayment> = ({ dataForm, methodPayment }) => {

 

  return (
    <div className="checkoutPayment">
      <h1 className="checkoutPayment__title">Cartão de crédito</h1>

      <div>
        <Input
          type="text"
          inputMode="none"
          onChange={({ currentTarget: { value } }) => (dataForm.numberCard = Number(value))}
          placeholder="000.000.000.000"
          isError={false}
          isShowMessage={false}
          isShowLabel={true}
          label="número"
          message="insira um número de catão válido"
        />
      </div>
      <div>
        <Input
          type="text"
          inputMode="none"
          onChange={({ currentTarget: { value } }) => (dataForm.nameCardHolder = value)}
          placeholder="Nome impresso no cartão"
          isError={false}
          isShowMessage={false}
          isShowLabel={true}
          label="nome do titular do cartão"
          message="insira um número de catão válido"
        />
      </div>

      <div className="checkoutPayment__containerInline">
        <span>
          <Input
            onChange={({ currentTarget: { value } }) => (dataForm.validDate = Number(value))}
            type="text"
            inputMode="none"
            placeholder="MM/AA"
            isError={false}
            isShowMessage={false}
            isShowLabel={true}
            label="data de válidade"
            message="insira uma data válida"
          />
        </span>

        <span>
          <Input
            onChange={({ currentTarget: { value } }) => (dataForm.codeCVV = Number(value))}
            type="text"
            inputMode="none"
            placeholder="000"
            isError={false}
            isShowMessage={false}
            isShowLabel={true}
            label="código CVV"
            message="insira um CVV válido"
          />
        </span>
      </div>
    </div>
  )
}

export default CheckoutPayment
