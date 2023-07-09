import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_COMPONENT } from "./constants/routeComponent.constant";
import ViewCart from "./components/viewCart";
import Header from "./components/shopHome/header";

function App() {
  const { itemManager, shopHome } = ROUTE_COMPONENT;
  const router = createBrowserRouter([
    {
      path: shopHome.path,
      element: <Header />,
      children: [
        {
          path: "/",
          element: shopHome.component(),
        },
        {
          path: "viewCart",
          element: ViewCart(),
        },
        { path: itemManager.path, element: itemManager.component() },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
