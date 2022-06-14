import { v4 as uuidv4 } from "uuid";

import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const BudgetModal = () => {
  const {
    openBudgetModal,
    setOpenBudgetModal,
    budgetForm,
    setBudgetForm,
    addBudget,
  } = useContext(BudgetContext);

  const clearForm = () => {
    setBudgetForm({
      budgetName: "",
      maxSpend: 0,
    });
  };

  return (
    <Modal
      show={openBudgetModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4 px-4">
        <div className="form">
          <div className="mb-3">
            <input
              onChange={(e) =>
                setBudgetForm({
                  ...budgetForm,
                  [e.target.name]: e.target.value,
                })
              }
              value={budgetForm.budgetName}
              type="text"
              className="form-control"
              placeholder="Budget Name"
              name="budgetName"
            />
          </div>
          <div className="mb-3">
            <input
              value={budgetForm.maxSpend}
              onChange={(e) =>
                setBudgetForm({
                  ...budgetForm,
                  [e.target.name]: e.target.value,
                })
              }
              type="number"
              className="form-control"
              placeholder="Max spend"
              name="maxSpend"
            />
          </div>
          <button
            onClick={() => {
              addBudget({ ...budgetForm, id: uuidv4() });
              clearForm();
            }}
            style={{ width: "100%" }}
            type="submit"
            className="btn btn-primary"
          >
            Add Budget
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenBudgetModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BudgetModal;
