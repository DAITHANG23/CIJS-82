import ChartContainer from "../ChartContainer/ChartContainer";
import ExpenseList from "../ExpenseList/ExpenseList";
import FormFilterYear from "../FormFilterYear/FormFilterYear";
import "./ExpenseContainer.css"

const ExpenseContainer = (props) =>{
    const {expenseList, currentYear, setCurrentYear, filtered, setFiltered} = props
    
    return <div className="expense-container">
        <FormFilterYear setCurrentYear={setCurrentYear} />
        <ChartContainer />
        <ExpenseList expenseList={expenseList} currentYear={currentYear} filtered={filtered} setFiltered={setFiltered}/>
    </div>
}

export default ExpenseContainer;