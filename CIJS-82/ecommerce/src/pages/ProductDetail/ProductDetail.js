import React from 'react'
import { useParams } from 'react-router-dom' 
const ProductDetail = () => {
    const params = useParams();
    const {productId} = params;
  return (
    <div>ProductDetail: {productId}</div>
  )
}

export default ProductDetail