import { ProgressBar } from "react-bootstrap";
import formatNumber from "../utils/formatNumber";
import { useContext, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";

const Uncategorized = () => {
  const { expenseStore } = useContext(BudgetContext);
  const uncategory = expenseStore?.filter((expense) =>
    expense.budgetId == undefined || expense.budgetId == "" ? expense : ""
  );

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>Uncategorized</h5>
            <h5 className="fs-6">
              {formatNumber(
                uncategory
                  ?.map((expense) => expense.spend)
                  .reduce((a, b) => a + Number(b), 0)
              )}
            </h5>
          </div>
          <ProgressBar
            className="mt-3 mb-4"
            animated={true}
            variant="primary"
          />
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary me-2">Add Expense</button>
            <button className="btn btn-secondary">View Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uncategorized;
