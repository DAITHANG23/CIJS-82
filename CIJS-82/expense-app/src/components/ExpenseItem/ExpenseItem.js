import "./ExpenseItem.css"

const ExpenseItem = (props) =>{
    const {name, amount, createTime} = props;
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
        const year = new Date(createTime).getFullYear();
        const month = months[new Date(createTime).getMonth()];
        const date = new Date(createTime).getDate();
       
    return <div className="expense-item" >
        <div className="expense-date">
            <p>{month}</p>
            <p>{year}</p>
            <p>{date}</p>
        </div>

        <div style={{width:"70%"}}>
        <p className="expense-title">{name}</p>
        </div>

        <div>
            <p className="amount">$ {amount}</p>
        </div>
    </div>
}

export default ExpenseItem