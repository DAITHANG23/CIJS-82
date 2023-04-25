import './ProductItem.css'

const ProductItem = (props) =>{
    const {productImg, title} = props;
    return <div className ="product-item">
        <img  src={productImg} alt =""/>
        <p>{title}</p>
        <div>
            <button>Add to cart</button>    
        </div>
    </div>
}

export default ProductItem;