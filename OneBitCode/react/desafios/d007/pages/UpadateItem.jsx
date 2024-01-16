import ItemForm from "../components/ItemForm";

export default function UpdateItem() {
  const { getItem } = useStock
  const { id } = useParams()

  const item = getItem(id)

  return (
    <>
      <h2>Atualizar item</h2>
      <ItemForm itemToUpdate={item} />
    </>
    )
}
