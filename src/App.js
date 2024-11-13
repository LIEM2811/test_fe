import { useRoutes } from "react-router-dom";
import NotFound from "./component/NotFound";
import LayoutFronend from "./layouts/LayoutFronend";
import RouterFronend from "./router/RouterFE";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutFronend />,
      children: RouterFronend
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);
  return element;
}

export default App;
