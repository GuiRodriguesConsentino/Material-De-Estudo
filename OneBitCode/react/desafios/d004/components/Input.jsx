// Instalar props-types no NPM

// Input.propsTypes = [
//    passwordSize: PropsTypes.number.isRequired
//    setPasswordSize: PropsTypes.func
// ]

export default function input(props) {
   return (
     <input
       type="number"
       id="passwordSize"
       min={1}
       value={props.passwordSize}
       onChange={(ev) => props.setPasswordSize(+ev.target.value)}
     />
   )
}