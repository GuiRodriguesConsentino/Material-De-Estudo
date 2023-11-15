// Manipulando componentes reutilizados
import Card from "./components/Card"

function App() {
   return (
     <>
       <h1>Exercício</h1>
       <Card 
        title="Pôster: Star Wars (1977)" 
        posterImg={swPosterImg} 
       />
       <Card
         title="Pôster: Empire Stikes Back (1980)"
         posterImg={esbPosterImg}
       />
       <Card
         title="Pôster: Return of the Jedi (1977)"
         posterImg={rotjPosterImg}
       />
     </>
   );
}

export default App