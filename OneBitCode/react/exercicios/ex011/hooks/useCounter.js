import { useState } from "react";

function getInitialValue() {
   console.log("Obtendo o valor inicial");
   return 1 + 1
}

export default function useCounter() {
  const [count, setCount] = useState(() => getInitialValue()); // Dessa forma só chama uma vez a função.

  const increment = () => {
     setCount((currentState) => currentState + 1)
     setCount((currentState) => currentState + 1); // Dessa forma muda o valor
  }

  return { count, increment }
}
