import './Footer2.css'

const Footer2 = (props) =>{
    const{title,p1,p2,p3} = props;
    return <div className="footer-2">
        <h4>{title}</h4>
        <div className="content-footer2">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        </div>
        
    </div>
}

export default Footer2;