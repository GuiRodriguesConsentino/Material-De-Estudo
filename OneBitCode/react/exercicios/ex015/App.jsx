import Container from "./components/Container";
import Header from "./components/Header";
import UserContext from "./contexts/UserConext"

export default function App() {
   const user = {
      name: "Guilherme",
      email: "Gui@email.com"
   }

   return (
     // Provider compartilha qualquer dados associado ao contexto
     <>
       <UserContext.Provider value={user}>
         <Header></Header>
         <h1>Usando contexto</h1>
         <Container>
            <p>Este é o nosso app com contexto</p>
         </Container>
       </UserContext.Provider>
       <div>
         {/* Não há acesso ao contexto */}
       </div>
     </>
   );
}