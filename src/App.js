import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
    <RouterProvider router={routes}></RouterProvider>
  </div>
  );
}

export default App;
