// Exemplo usando o VITE

import Status from "./components/Status"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"
import styles from "/App.module.css"

function App() {
   return (
   // CSS integrado 
   <div className={styles.app}>
       <Title />
       <Subtitle />
       <Status />
     </div>
   );
}