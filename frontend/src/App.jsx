import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import ReturnEquipment from "./pages/ReturnEquipment";
import History from "./pages/History";
import Equipment from "./pages/Equipment";
import AssignEquipment from "./pages/AssignEquipment";
import AddEquipment from "./pages/AddEquipment";

import initialEquipment from "./data/equipmentData";

function App() {
 
 const [equipment, setEquipment] = useState(initialEquipment);

  return (
  <BrowserRouter>
     <div className="App">
      <TopNavbar />
      <div className="content">

       <Sidebar />

        <main className="main-content">
         <Routes>
          <Route path="/" element={<Dashboard equipment={equipment} />}
         />
          <Route path="/equipment" element={<Equipment equipment={equipment} />}/>
          <Route path="/add" element={ <AddEquipment equipment={equipment} setEquipment={setEquipment} />} />
          <Route path="/assign" element={ <AssignEquipment equipment={equipment} setEquipment={setEquipment} />} />
          <Route path="/return" element={ <ReturnEquipment equipment={equipment} setEquipment={setEquipment}  />} />
          <Route path="/history" element={<History />} />
         </Routes>
        </main>
      </div>
    </div>
    
    
   </BrowserRouter>
  );
  

  
     
  
  
}

export default App
