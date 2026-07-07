import {BrowserRouter, Routes,Route} from "react-router-dom";

import './App.css';

import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import ReturnEquipment from "./pages/ReturnEquipment";
import History from "./pages/History";
import Equipment from "./pages/Equipment";
import AssignEquipment from "./pages/AssignEquipment";
import AddEquipment from "./pages/AddEquipment";

function App() {
 
  return (
    <BrowserRouter>
    <TopNavbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/add" element={<AddEquipment />} />
      <Route path="/assign" element={<AssignEquipment />} />
      <Route path="/return" element={<ReturnEquipment />} />
      <Route path="/history" element={<History />} />
    </Routes>
    
    
    </BrowserRouter>
  );
  

  
     
  
  
}

export default App
