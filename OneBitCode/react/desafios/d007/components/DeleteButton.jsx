import PropTypes from "props-types"

DeleteButton.PropTypes = {
   itemId: PropTypes.number,
   itemName: PropTypes.string
}

export function DeleteButton({ itemId, itemName }) {
   const { deleteItem } = useStock()
   const navigate = useNavigate()

   const handleDelete = () => {
      if (confirm(`Tem certeza que deseja excluir o item?`)) {
         deleteItem(itemId)
         navigate("/items")
      }
   }
   return (
      <button className="button is-danger is-small">
         Excluir
      </button>
   )
}