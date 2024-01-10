import { createContext, useState } from "react" 
import PropsTypes from "props-types"

export const StockContext = createContext({})

StockContextProvider.PropsTypes = {
   children: PropsTypes.node
}

// { name, description, quantity, price, category, createdAt, updateAt}
export function StockContextProvider({children}) {
   const [items, setItems] = useState(() => {
      const storedItems = localStorage.getItem('obc-react-stock')
      if (!storedItems) return []
      const items = JSON.parse(storedItems)
      items.forEach((item) => {
         item.createdAt = new Date(item.createdAt)
         item.updateAtAt = new Date(item.updateAtAt);
      })
      return items
   })

   const addItem = (item) => {
      setItems(currentState => {
         const updateItems = [item, ...currentState]
         localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems))
         return updatedItems
      })
   }

   const getItem = (itemId) => {
      return items.find(item => item.id === +itemId)
   }

   const updateItem = (itemId,newAttributes) => {
      setItems(currentState => {
         const itemIndex = currentState.findIndex(item => item.id === +itemId)
         const updateItems = [...currentState]
         Object.assign(updateItems[itemIndex], newAttributes, { updateAt: new Date() })
         localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
         return updateItems
      })
   }

   const deleteItem = (itemId) => {
      setItems(currentState => {
         const updateItems = currentState.filter(item => item.id !== itemId)
         localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
         return updateItems
      })
   }

   const stock = {
      items,
      addItem,
      getItem,
      updateItem,
      deleteItem
   }

   return (
      <StockContext.Provider value={stock}>
         {children}
      </StockContext.Provider>
   )
}