import { useRef, useState } from "react"
import RefExample from "./RefExample"

export default function App() {
   let variable = 0
   const [state, setState] = useState(0)
   const ref = useRef(0)

   const  showValues = () => {
      alert(`
         Variável: ${variable}
         Ref: ${ref.current}
         State: ${state}
      `)
   }

   return (
     <div>
       <h1>Conhecendo useRef</h1>
       <h2>Exemplo de useRef com o DOM.</h2>
       <RefExample />
       <hr />
       <p>Variável: {variable}</p>
       <p>Ref: {ref.current}</p>
       <p>State: {state}</p>
       {/* MUDA EM MEMÓRIA MAIS NÃO ARMAZENA E NÃO MUDA NA INTERFACE*/}
       <button onClick={() => variable++}>Aumentar Variável</button>
       {/* MUDA EM MEMÓRIA E ARMAZENA E NÃO MUDA NA INTERFACE */}
       <button onClick={() => ref.current++}>Aumentar Ref</button>
       {/* MUDA NA INTERFACE E MEMÓRIA */}
       <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
       <hr />
       <button onClick={showValues}>Exibir valores</button>
     </div>
   );
}