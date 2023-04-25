import "./ChartItem.css"

const ChartItem = (props) =>{
    const {month} = props;
    return <div className="chart-item">
        <div className="chart-percent">
        <p ></p>
        </div>
        <p>{month}</p>   
    </div>
}

export default ChartItem;