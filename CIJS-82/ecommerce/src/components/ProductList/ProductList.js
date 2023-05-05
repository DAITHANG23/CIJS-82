import React from 'react'
import { useContext } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import AppContext from '../../contexts/AppContext';


const ProductList = () => {
    
    const {products = []} = useContext(AppContext);
    
    const isValidProductList = products && Array.isArray(products);
    const listProduct = isValidProductList ? (products.map((product) => {
        const {productName, productImage, productPrice, id} = product;
       
        return(
            <div key={id} style={{
                width:"300px",
                height:"400px",
                margin:"10px"
            }}>
                <ProductItem 
                    productName ={productName}
                    productImage = {productImage}
                    productPrice = {productPrice}
                    productId = {id}
                    key={id}
                />
            </div>
        )
    })
    ):(
        <div>
            No products
        </div>
    )
  return (
    <div>
        <h6>{products.length} products</h6>
      <div className="row">{listProduct}</div>
    </div>
  )
}

export default ProductList