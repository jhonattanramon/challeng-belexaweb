import CardProduct from '../CardProduct';
import './style.css'

interface TypeViewerProduct {
  isTitle: boolean;
  listProducts: ListProducts;
  isShowPrice: boolean;
}

const ViwerProduct: React.FC<TypeViewerProduct> = ({ isTitle,listProducts,isShowPrice }) => {
  return (
      <div className="viwerProduct">
        {isTitle ? <h1 className='viwerProduct__title'>Produtos</h1> : null}

        {
            listProducts.map( (product,index) => <CardProduct key={index} product={product} isShowPrice={isShowPrice} /> )
        }
      </div>
      )
}

export default ViwerProduct
