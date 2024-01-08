// Instalar o props-types
// Instalar react-router-dom

import { StockContextProvider } from "./contexts/StockContext";

export default function App() {
   return (
      <StockContextProvider>
         <RouterProvider router={router} />
      </StockContextProvider>
   )
}