import SimulationResult from "./component/SimulationResult";
import Simulator from "./component/Simulator";

function App() {
  return (
    <div className="container">
      <h1>Simulador de Investimentos</h1>
      <div>
        <Simulator />
        <SimulationResult />
      </div>
    </div>
  );
}

export default App;
