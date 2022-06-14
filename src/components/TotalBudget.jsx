import { ProgressBar } from "react-bootstrap";
import formatNumber from "../utils/formatNumber";

const TotalBudget = ({ totalExpense, totalBudget }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <h5 className="fs-6">{formatNumber(Number(totalBudget))}</h5>
          </div>
          <ProgressBar
            className="mt-3 mb-4"
            animated={true}
            variant="primary"
            now={totalExpense}
            max={totalBudget}
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

export default TotalBudget;
