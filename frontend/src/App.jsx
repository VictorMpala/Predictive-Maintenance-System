import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/signin";
import SignUp from "./pages/signup";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/Dashboard";
import Graphs from "./pages/Graphs";
import Analytic from "./pages/Analytic";
import Alarms from "./pages/Alarms";
import Maintenance from "./pages/Maintenance";
import Predictions from "./pages/Predictions";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/analytics" element={<Analytic/>}/>
      <Route path="/alarms" element={<Alarms/>}/>
      <Route path="/predictions" element={<Predictions/>}/>
      <Route path="/maintenance" element={<Maintenance/>}/>
      <Route path="/graphs" element={<Graphs/>}/>



      <Route path="*" element={<NotFound/>}/>
      <Route path="/dashboard/*" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

