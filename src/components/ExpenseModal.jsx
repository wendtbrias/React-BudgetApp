import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseModal = () => {
  const {
    budgetStore,
    openExpenseModal,
    setOpenExpenseModal,
    expenseForm,
    setExpenseForm,
    addExpense,
  } = useContext(BudgetContext);

  const clearForm = () => {
    setExpenseForm({
      expenseName: "",
      spend: 0,
      category: "",
    });
  };

  return (
    <Modal show={openExpenseModal} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Expense
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4 px-4">
        <div className="form">
          <div className="mb-3">
            <input
              onChange={(e) =>
                setExpenseForm({
                  ...expenseForm,
                  [e.target.name]: e.target.value,
                })
              }
              value={expenseForm.budgetName}
              type="text"
              className="form-control"
              placeholder="Budget Name"
              name="expenseName"
            />
          </div>
          <div className="mb-3">
            <input
              value={expenseForm.maxSpend}
              onChange={(e) =>
                setExpenseForm({
                  ...expenseForm,
                  [e.target.name]: e.target.value,
                })
              }
              type="number"
              className="form-control"
              placeholder="Spend"
              name="spend"
            />
          </div>
          <div className="mb-3">
            <select
              onChange={(e) =>
                setExpenseForm({ ...expenseForm, budgetId: e.target.value })
              }
              className="form-select"
            >
              <option>Select category</option>
              {budgetStore.length > 0 &&
                budgetStore.map((item, id) => {
                  return (
                    <option key={id} value={item.id}>
                      {item.budgetName}
                    </option>
                  );
                })}
            </select>
          </div>
          <button
            onClick={() => {
              addExpense({ ...expenseForm, id: uuidv4() });
              clearForm();
            }}
            style={{ width: "100%" }}
            className="btn btn-primary"
          >
            Add Expense
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenExpenseModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExpenseModal;
