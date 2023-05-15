import './ChartFeb.css'

const ChartFeb = (props) => {
    const { month, filteredMonthFeb } = props;
    const TARGET_INCOME = 1000;
    const chartFeb = filteredMonthFeb.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartFeb) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartFeb.length; i++) {    
            totalExpenseMonth += chartFeb[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartFeb);

    let percent = (totalExpense / TARGET_INCOME)*100
    

    return <div className="chart-item">
        <div className="chart-percent">
            <p className="chart-percent-item" >{percent}</p>
        </div>
        <p>{month}</p>
    </div>

}

export default ChartFeb