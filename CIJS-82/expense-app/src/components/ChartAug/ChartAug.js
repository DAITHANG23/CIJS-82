import React from 'react'
import './ChartAug.css'
const ChartAug = (props) => {
    const { month, filteredMonthAug } = props;
    const TARGET_INCOME = 1000;
    const chartAug = filteredMonthAug.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartAug) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartAug.length; i++) {    
            totalExpenseMonth += chartAug[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartAug);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartAug