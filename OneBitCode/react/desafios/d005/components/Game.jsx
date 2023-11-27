import { PropsTypes } from "props-types";

Game.propsTypes = {
   title: PropsTypes.string,
   cover:PropsTypes.string,
   onRemove: PropsTypes.func
}

export default function Game({ title, cover, onRemove }) {
   return (
     <div>
       <img src={cover} alt="" />
       <div>
         <h2>{title}</h2>
         <button onClick={onRemove}>Remover</button>
       </div>
     </div>
   );
}