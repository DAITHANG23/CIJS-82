import './ServiceItem.css'

const ServiceItem = (props) =>{
    const {serviceImg, title} = props;
    return <div className="serviceItem">
        <img src={serviceImg} alt="" />
        <p>{title}</p>
    </div>
}

export default ServiceItem;