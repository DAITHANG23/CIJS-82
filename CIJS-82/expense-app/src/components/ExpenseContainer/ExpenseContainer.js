import ChartContainer from "../ChartContainer/ChartContainer";
import ExpenseList from "../ExpenseList/ExpenseList";
import FormFilterYear from "../FormFilterYear/FormFilterYear";
import "./ExpenseContainer.css"

const ExpenseContainer = (props) =>{
    const {expenseList} = props
    
    return <div className="expense-container">
        <FormFilterYear />
        <ChartContainer />
        <ExpenseList expenseList={expenseList} />
    </div>
}

export default ExpenseContainer;