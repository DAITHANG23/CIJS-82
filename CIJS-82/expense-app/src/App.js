import './App.css';
import Header from './components/Header/Header';
import ExpenseContainer from './components/ExpenseContainer/ExpenseContainer';
import FormModal from './components/FormModal/FormModal';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {

  const TARGET_INCOME = 1000;
  const FILTER_YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
  const [expenseList, setExpenseList] = useState([])
  const [currentYear, setCurrentYear] = useState("")
  const [filtered, setFiltered] = useState([]);

  const onAddNewExpenseList = (expenseItem) => {
    const newExpense = {
      ...expenseItem,
      id: uuidv4(),
    };

    const newExpenseList = [...expenseList, newExpense]
    setExpenseList(newExpenseList)

  }

  return (
    <div className="App">
      <main>
        <Header />
        <ExpenseContainer expenseList={expenseList} currentYear={currentYear} setCurrentYear={setCurrentYear} filtered={filtered} setFiltered={setFiltered} />
      </main>

      <FormModal onAddExpense={onAddNewExpenseList} />
    </div>
  );
}

export default App;
