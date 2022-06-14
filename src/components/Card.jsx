import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import formatNumber from "../utils/formatNumber";
import { ProgressBar } from "react-bootstrap";

function formatVariant(amount, max) {
  const ratio = Number(amount) / Number(max);
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
}

const Card = ({ budget }) => {
  const { expenseStore, setOpenExpenseModal, openViewExpense } =
    useContext(BudgetContext);

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="fs-5">{budget.budgetName}</h5>
            <h5 className="fs-6">{formatNumber(Number(budget.maxSpend))}</h5>
          </div>
          <ProgressBar
            className="mt-3 mb-4"
            animated={true}
            variant={formatVariant(
              expenseStore
                .map((item) => (item.budgetId == budget.id ? item.spend : ""))
                .reduce((a, b) => a + Number(b), 0),
              budget.maxSpend
            )}
            now={expenseStore
              .map((item) => (item.budgetId == budget.id ? item.spend : null))
              .reduce((a, b) => Number(a) + Number(b), 0)}
            max={Number(budget.maxSpend)}
          />
          <div className="d-flex justify-content-end">
            <button
              onClick={() => setOpenExpenseModal(true)}
              className="btn btn-primary me-2"
            >
              Add Expense
            </button>
            <button
              onClick={() => openViewExpense(budget.id)}
              className="btn btn-secondary"
            >
              View Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
