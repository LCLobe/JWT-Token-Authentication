import {RouterProvider} from "react-router-dom";
import { Router } from "./js/routes/routes.jsx";
import { ContextProvider } from "./js/context/Context";

import './App.css';

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={Router} />
    </ContextProvider> 
  );
}

export default App;
