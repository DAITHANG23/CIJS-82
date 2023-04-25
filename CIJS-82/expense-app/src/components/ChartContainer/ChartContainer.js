import ChartItem from "../ChartItem/ChartItem";
import "./ChartContainer.css"

const ChartContainer = () =>{
    return <div className="chart-container">
        <ChartItem month="Jan"/>
        <ChartItem month="Feb"/>
        <ChartItem month="Mar"/>
        <ChartItem month="Apr"/>
        <ChartItem month="May"/>
        <ChartItem month="Jun"/>
        <ChartItem month="Jul"/>
        <ChartItem month="Aug"/>
        <ChartItem month="Sep"/>
        <ChartItem month="Oct"/>
        <ChartItem month="Nov"/>
        <ChartItem month="Dec"/>
    </div>
}

export default ChartContainer;