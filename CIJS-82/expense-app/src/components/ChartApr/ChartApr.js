import React from 'react'

const ChartApr = (props) => {
    const { month, filteredMonthApr } = props;
    const TARGET_INCOME = 1000;
    const chartApr = filteredMonthApr.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartApr) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartApr.length; i++) {    
            totalExpenseMonth += chartApr[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartApr);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item">{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartApr