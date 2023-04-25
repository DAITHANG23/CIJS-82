import ExpenseItem from "../ExpenseItem/ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) => {
    const { expenseList } = props
    const isValidExpense = expenseList && Array.isArray(expenseList)

    const listExpense = isValidExpense && expenseList.map((expenseItem) => {
        console.log("expenseItem",expenseList)
        const { name, amount, createTime, id } = expenseItem;
       
        return (
            <ExpenseItem 
                name ={name}
                amount = {amount}
                createTime = {createTime}
                key ={id}
            />
        )
    })

    return <div className="expense-list">
            {listExpense}
    </div>
}

export default ExpenseList;