import { createContext, useState, useEffect } from "react";

export const BudgetContext = createContext();

export const Provider = ({ children }) => {
  const [budgetId, setBudgetId] = useState(null);
  const [openViewExpenseModal, setOpenViewExpenseModal] = useState(false);
  const [openBudgetModal, setOpenBudgetModal] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [budgetStore, setBudgetStore] = useState(
    JSON.parse(localStorage.getItem("budgetStore")) || []
  );
  const [expenseStore, setExpenseStore] = useState(
    JSON.parse(localStorage.getItem("expenseStore")) || []
  );

  const [budgetForm, setBudgetForm] = useState({
    budgetName: "",
    maxSpend: 0,
  });
  const [expenseForm, setExpenseForm] = useState({
    expenseName: "",
    spend: 0,
    budgetId: "",
  });

  useEffect(() => {
    localStorage.setItem("budgetStore", JSON.stringify(budgetStore || []));
    localStorage.setItem("expenseStore", JSON.stringify(expenseStore || []));
  }, [budgetStore, expenseStore]);

  const openViewExpense = (id) => {
    setBudgetId(id);
    setOpenViewExpenseModal(true);
  };

  const addBudget = (budgetData) => {
    if (!budgetData) return false;
    setBudgetStore([...budgetStore, budgetData]);
    setOpenBudgetModal(false);
  };

  const addExpense = (expenseData) => {
    if (!expenseData) return false;
    setExpenseStore([...expenseStore, expenseData]);
    setOpenExpenseModal(false);
  };

  const init = {
    budgetStore,
    setBudgetStore,
    openExpenseModal,
    setOpenExpenseModal,
    openBudgetModal,
    setOpenBudgetModal,
    expenseStore,
    setExpenseStore,
    budgetForm,
    setBudgetForm,
    addBudget,
    expenseForm,
    setExpenseForm,
    addExpense,
    openViewExpenseModal,
    openViewExpense,
    setOpenViewExpenseModal,
    budgetId,
    setBudgetId,
  };

  return (
    <BudgetContext.Provider value={init}>{children}</BudgetContext.Provider>
  );
};
