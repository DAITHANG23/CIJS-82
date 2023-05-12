import { useEffect } from "react";
import ChartItem from "../ChartItem/ChartItem";
import "./ChartContainer.css"

const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const ChartContainer = ({ filtered, filteredMonthJan, setFilteredMonthJan, filteredMonthFeb, setFilteredMonthFeb, filteredMonthMar, setFilteredMonthMar, filteredMonthApr, setFilteredMonthApr, filteredMonthMay, setFilteredMonthMay, filteredMonthJun, setFilteredMonthJun, filteredMonthJul, setFilteredMonthJul, filteredMonthAug, setFilteredMonthAug, filteredMonthSep, setFilteredMonthSep, filteredMonthOct, setFilteredMonthOct, filteredMonthNov, setFilteredMonthNov, filteredMonthDec, setFilteredMonthDec, currentYear}) => {

    useEffect(()=>{
        const chartItemJan = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[0];
        })

        setFilteredMonthJan(chartItemJan);

        const chartItemFeb = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[1];
        })

        setFilteredMonthFeb(chartItemFeb);

        const chartItemMar = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[2];
        })

        setFilteredMonthMar(chartItemMar);

        const chartItemApr = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[3];
        })

        setFilteredMonthApr(chartItemApr);

        const chartItemMay = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[4];
        })

        setFilteredMonthMay(chartItemMay);

        const chartItemJun = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[5];
        })

        setFilteredMonthJun(chartItemJun);

        const chartItemJul = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[6];
        })

        setFilteredMonthJul(chartItemJul);

        const chartItemAug = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[7];
        })

        setFilteredMonthAug(chartItemAug);

        const chartItemSep = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[8];
        })

        setFilteredMonthSep(chartItemSep);

        const chartItemOct = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[9];
        })

        setFilteredMonthOct(chartItemOct);

        const chartItemNov = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[10];
        })

        setFilteredMonthNov(chartItemNov);

        const chartItemDec = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[11];
        })

        setFilteredMonthDec(chartItemDec);

        
    },[currentYear, MONTHS[0], MONTHS[1], MONTHS[2], MONTHS[3], MONTHS[4], MONTHS[5], MONTHS[6], MONTHS[7], MONTHS[8], MONTHS[9], MONTHS[10],MONTHS[11]])
    

    console.log("filtered", filtered)
    console.log("filteredMonthJan", filteredMonthJan);
    console.log("filteredMonthFeb", filteredMonthFeb);
    console.log("filteredMonthMar", filteredMonthMar);
   
    return <div className="chart-container">

        <ChartItem month="Jan" />
        <ChartItem month="Feb" />
        <ChartItem month="Mar" />
        <ChartItem month="Apr" />
        <ChartItem month="May" />
        <ChartItem month="Jun" />
        <ChartItem month="Jul" />
        <ChartItem month="Aug" />
        <ChartItem month="Sep" />
        <ChartItem month="Oct" />
        <ChartItem month="Nov" />
        <ChartItem month="Dec" />

    </div>
}

export default ChartContainer;