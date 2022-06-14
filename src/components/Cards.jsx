import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import formatNumber from "../utils/formatNumber";
import Card from "./Card";
import { ProgressBar } from "react-bootstrap";
import TotalBudget from "./TotalBudget";
import Uncategorized from "./Uncategorized";

const Cards = () => {
  const { expenseStore, budgetStore } = useContext(BudgetContext);
  const totalExpense = expenseStore?.reduce(
    (a, b) => Number(a) + Number(b.spend),
    0
  );
  const totalBudget = budgetStore?.reduce(
    (a, b) => Number(a) + Number(b.maxSpend),
    0
  );

  return (
    <div className="row py-1">
      {budgetStore.length > 0 &&
        budgetStore.map((budget, id) => <Card key={id} budget={budget} />)}
      <TotalBudget totalBudget={totalBudget} totalExpense={totalExpense} />
      <Uncategorized />
    </div>
  );
};

export default Cards;
