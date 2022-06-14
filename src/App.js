import { Provider } from "./context/BudgetContext";
import {
  BudgetModal,
  ExpenseModal,
  Header,
  Cards,
  ViewExpenseModal,
} from "./components";

function App() {
  return (
    <Provider>
      <div className="container mx-auto">
        <Header />
        <Cards />
        <ExpenseModal />
        <BudgetModal />
        <ViewExpenseModal />
      </div>
    </Provider>
  );
}

export default App;
