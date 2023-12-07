import { useContext } from "react";
import UserContext from "../contexts/UserConext";

export default function Header() {
   const user = useContext(UserContext)

   return (
      <header>
         <h3>Bem vin, {user.name}</h3>
         <hr />
      </header>
   )
}