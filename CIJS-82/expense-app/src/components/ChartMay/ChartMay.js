import React from 'react'
import './ChartMay.css'
const ChartMay = (props) => {
    const { month, filteredMonthMay } = props;
    const TARGET_INCOME = 1000;
    const chartMay = filteredMonthMay.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartMay) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartMay.length; i++) {    
            totalExpenseMonth += chartMay[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartMay);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item">{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartMay