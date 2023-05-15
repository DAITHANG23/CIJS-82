import React from 'react'
import './ChartSep.css'
const ChartSep = (props) => {
    const { month, filteredMonthSep } = props;
    const TARGET_INCOME = 1000;
    const chartSep = filteredMonthSep.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartSep) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartSep.length; i++) {    
            totalExpenseMonth += chartSep[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartSep);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartSep