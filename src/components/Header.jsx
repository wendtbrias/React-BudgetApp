import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const Header = () => {
  const { setOpenBudgetModal, setOpenExpenseModal } = useContext(BudgetContext);
  return (
    <div className="row pt-5 pb-3 justify-content-between">
      <div className="col-3">
        <h2 className="fs-3 fw-bold">Budget App</h2>
      </div>
      <div className="col-3">
        <button
          onClick={() => setOpenBudgetModal(true)}
          className="fw-semibold btn btn-primary me-2 rounded"
        >
          Add Budget
        </button>
        <button
          onClick={() => setOpenExpenseModal(true)}
          className="fw-semibold btn btn-secondary rounded"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default Header;
