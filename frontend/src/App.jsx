import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/signin";
import SignUp from "./pages/signup";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/Dashboard";
import Dashboardg from "./pages/Dashboardg";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/dashboard/*" element={<Dashboard/>}/>
      <Route path="/dashboard/graphs*" element={<Dashboardg/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

