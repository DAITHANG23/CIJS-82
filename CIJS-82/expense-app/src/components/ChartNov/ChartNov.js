import React from 'react'
import './ChartNov.css'
const ChartNov = (props) => {
    const { month, filteredMonthNov } = props;
    const TARGET_INCOME = 1000;
    const chartNov = filteredMonthNov.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartJan) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartJan.length; i++) {    
            totalExpenseMonth += chartJan[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartNov);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartNov