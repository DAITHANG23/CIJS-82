import { useEffect, useState } from "react"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) => {
    const { expenseList, currentYear, filtered, setFiltered } = props

    useEffect(() => {
        const filteredList = expenseList.filter((expenseItem) =>
            new Date(expenseItem.createTime).getFullYear() === (+currentYear)
        )
        setFiltered(filteredList)
    }, [currentYear])

    const listExpense = filtered.map((expenseItem) => {

        const { name, amount, createTime, id } = expenseItem;

        return (
            <ExpenseItem
                name={name}
                amount={amount}
                createTime={createTime}
                key={id}
            />
        )
    })

    return <div className="expense-list">
        {listExpense}
    </div>
}

export default ExpenseList;