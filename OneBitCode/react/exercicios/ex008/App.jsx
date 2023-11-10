import { Fragment } from "react";
import Card from "./components/Card";

function App() {
  return (
    // Não cria uma div desnecessária || Atalho do Fragment "<>" "</>"
    <Fragment>
      <h1>Exercício</h1>
      <Card />
    </Fragment>
  );
}

export default App;
