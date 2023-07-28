import "./common.css";

import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  //根据路由表生成路由
  const element = useRoutes(routes);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;


