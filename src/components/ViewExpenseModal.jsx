import { Modal, Button } from "react-bootstrap";
import { BudgetContext } from "../context/BudgetContext";
import { useContext, useEffect, useState } from "react";

const ViewExpenseModal = () => {
  const {
    setOpenViewExpenseModal,
    openViewExpenseModal,
    setExpenseStore,
    expenseStore,
    budgetId,
    setBudgetId,
    setBudgetStore,
    budgetStore,
  } = useContext(BudgetContext);
  const [viewExpense, setViewExpense] = useState([]);

  useEffect(() => {
    setViewExpense(
      expenseStore.filter((item) => (item.budgetId == budgetId ? item : ""))
    );
    console.log("test");
  }, [budgetId, expenseStore]);

  const deleteExpense = (id) => {
    const fitlerRes = expenseStore.filter((expense) =>
      expense.id != id ? expense : ""
    );
    setExpenseStore(fitlerRes);
  };

  const deleteBudget = (budgetId) => {
    const filterRes = budgetStore.filter((budget) =>
      budget.id != budgetId ? budget : ""
    );

    setBudgetStore(filterRes);
    setBudgetId(null);
    setOpenViewExpenseModal(false);
  };

  return (
    <Modal
      show={openViewExpenseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className=" d-flex align-items-center"
          id="contained-modal-title-vcenter"
        >
          <h6 className="fs-5">View Expense</h6>
          <button
            onClick={() => deleteBudget(budgetId)}
            className="btn btn-danger btn-md ms-4"
          >
            Delete
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4 px-4">
        {viewExpense.length > 0 &&
          viewExpense.map((view, id) => {
            return (
              <div className="d-flex my-2 justify-content-between">
                <h5 className="fs-6">{view.expenseName}</h5>
                <button
                  onClick={() => deleteExpense(view.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setOpenViewExpenseModal(false);
            setBudgetId(null);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewExpenseModal;
