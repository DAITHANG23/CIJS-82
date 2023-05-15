import React from 'react'
import './ChartJul.css'
const ChartJul = (props) => {
    const { month, filteredMonthJul } = props;
    const TARGET_INCOME = 1000;
    const chartJul = filteredMonthJul.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartJul) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartJul.length; i++) {    
            totalExpenseMonth += chartJul[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartJul);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartJul