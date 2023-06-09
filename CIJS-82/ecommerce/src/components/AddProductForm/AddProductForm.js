import React from 'react'
import { useState, useContext } from 'react'
import AppContext from '../../contexts/AppContext';
import './AddProductForm.css'

const AddProductForm = () => {
  const { onAddNewProduct } = useContext(AppContext);
  const [productValue, setProductValue] = useState({
    productName: "",
    productImage: "",
    productPrice: ""
  });

  const onProductChange = (e) => {
    const { name, value } = e.target;

    setProductValue({
      ...productValue,
      [name]: value
    })
  }

  const onProductSubmit = (e) => {
    e.preventDefault();
    onAddNewProduct(productValue);
    setProductValue({
      productName: "",
      productImage: "",
      productPrice: ""
    });
  }


  return (
    <div>
      <form onSubmit={onProductSubmit}>
        <div>
          <label htmlFor='productName'>Product Name</label>
          <input
            id='productName'
            value={productValue.productName}
            className='form-control'
            placeholder='Enter your product name'
            name='productName'
            onChange={onProductChange}
          />
        </div>

        <div>
          <label> Product image (url)</label>
          <input
            id='productImage'
            value={productValue.productImage}
            className='form-control'
            placeholder='Enter your product image'
            name='productImage'
            onChange={onProductChange}
          />
        </div>

        <div>
          <label>Price ($)</label>
          <input
            id='productPrice'
            value={productValue.productPrice}
            className='form-control'
            placeholder='Enter your product price'
            name='productPrice'
            onChange={onProductChange}
          />
        </div>

        <div>
          <button className='btn btn-primary'>ADD NEW PRODUCT</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm