import { createBrowserRouter } from "react-router-dom"
import CreateItem from "./pages/CreateItem";
import Home from "./pages/Home";
import ItemsLayout from "./pages/Layout";
import ListItem from "./pages/ListItems";
import RootLayout from "./pages/RootLayout";
import ShowItem from "./pages/ShowItem";
import UpdateItem from "./pages/UpadateItem";


// localhost:3000/
// localhost:3000/items
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItem /> },
          { path: "new", element: <CreateItem /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> }
        ],
      },
    ],
  },
]);

export default router