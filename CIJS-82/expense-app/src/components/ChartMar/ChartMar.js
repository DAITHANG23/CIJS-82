import React from 'react'

const ChartMar = (props) => {
    const { month, filteredMonthMar } = props;
    const TARGET_INCOME = 1000;
    const chartMar = filteredMonthMar.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartMar) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartMar.length; i++) {    
            totalExpenseMonth += chartMar[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartMar);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartMar