import "./App.css";
import CriandoLista from "./componets/CriandoLista";
import DeleteUsuario from "./componets/DeleteUsuario";
import MetodoFilter from "./componets/MetodoFilter";
import MudaNomeClick from "./componets/MudaNomeClick";

function App() {
  return (
    <div className="App">
      <MudaNomeClick />
      <CriandoLista />
      <DeleteUsuario />
      <MetodoFilter />
    </div>
  );
}

export default App;
