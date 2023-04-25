import './ReviewItem.css'

const ReviewItem = (props) =>{
    const {content,name} = props;
    return <div className="reviewitem">
        <img src="./images/dau.png"/>
        <p className="content">{content}</p>
        <p className="name">{name}</p>
    </div>
}

export default ReviewItem;