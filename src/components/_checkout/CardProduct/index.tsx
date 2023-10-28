import './style.css'

interface TypeCardProduct {
  product: Product;
  isShowPrice: boolean;
}

const CardProduct: React.FC<TypeCardProduct> = ({ product, isShowPrice }) => {
  const { description, image, name, price, sale, sale_price } = product

  return (
    <button className="cardProduct">
      <div className="cardProduct__containerImage">
        <img className="cardProduct__image" src={image} alt={image} />
      </div>

      <div className="cardProduct__containerDescription">
        <span>
          <p className="cardProduct__description">
            {name} - {description}
          </p>
        </span>
      </div>

      {isShowPrice ? (
        <div className="cardProduct__containerPrice">
          <span>
            {sale ? (
              <>
                <div>
                  <span className='cardProduct__salePrice'>R$ {price.toFixed(2)}</span>
                </div>

                <div>
                  <span className='cardProduct__price' >R$ {sale_price?.toFixed(2)}</span>
                </div>
              </>
            ) : (
              <div>
                <span className='cardProduct__price'>R$ {price.toFixed(2)}</span>
              </div>
            )}
          </span>
        </div>
      ) : null}
    </button>
  )
}

export default CardProduct
