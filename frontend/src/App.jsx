import Login from "./pages/authenticationPage/Login";
import Register from "./pages/authenticationPage/Register";
import { BrowserRouter,Route,Routes } from "react-router-dom";
export default function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </BrowserRouter>
  
  </>)
}