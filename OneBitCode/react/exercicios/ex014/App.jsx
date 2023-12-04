import { useEffect, useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`O efeito colateral foi ativado!`);

    return () => {
      console.log("Fazendo a limpeza...");
      console.log("Componente desmontado!");
    };
  }, []);

  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      Contador: [counter]
    </button>
  );
}

export default function App() {
  const [show, setShow] = useEffect(false);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <h1>Conhecendo o useEffect</h1>
      <input
        type="checkbox"
        id="show"
        value={show}
        onChange={() => setShow((show) => !state)}
      />
      <label htmlFor="show"></label>
      {show ? <Counter /> : null}
      <hr />
      <button onClick={() => setCounter2((counter2) => counter2 + 1)}>
        Contador 2: [counter2]
      </button>
    </>
  );
}