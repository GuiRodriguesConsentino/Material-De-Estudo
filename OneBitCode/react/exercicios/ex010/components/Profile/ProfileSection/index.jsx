import styles from "./styles.module.css"

export default function ProfileSection(props) {
   return (
      <div 
         // Props com Rest Param
         {...props}
         className={`${styles.wrapper} ${props.className}`}
      >
         {props.children}
      </div>
   )
}