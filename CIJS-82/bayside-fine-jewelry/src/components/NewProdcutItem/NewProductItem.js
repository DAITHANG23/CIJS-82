import './NewProductItem.css'

const NewProductItem = (props) =>{
    const {newPdImg} = props;
    return <div className="new-product-item">
        <img src={newPdImg} alt=""/>
    </div>
}

export default NewProductItem 