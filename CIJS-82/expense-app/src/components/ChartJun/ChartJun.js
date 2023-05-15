import React from 'react'
import './ChartJun.css'
const ChartJun = (props) => {
    const { month, filteredMonthJun } = props;
    const TARGET_INCOME = 1000;
    const chartJun = filteredMonthJun.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartJun) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartJun.length; i++) {    
            totalExpenseMonth += chartJun[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartJun);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>
}

export default ChartJun