import { useState } from "react";
import "./AssignmentForm.css";

function AssignmentForm({ equipment, setEquipment }) {

  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [employeeName, setEmployeeName] = useState("");
   const handleAssign = () => {

  if (!selectedEquipment || !employeeName) {
    alert("Please select equipment and enter an employee name.");
    return;
  }

  const updatedEquipment = equipment.map((item) => {

    if (item.id === Number(selectedEquipment)) {

      return {
        ...item,
        status: "Issued",
        assignedTo: employeeName,
      };

    }

    return item;

  });

  setEquipment(updatedEquipment);

  setSelectedEquipment("");
  setEmployeeName("");

  alert("Equipment assigned successfully!");

};

  return (
    <div className="equipment-form">

      <label>Select Equipment</label>

      <select
        value={selectedEquipment}
        onChange={(event) => setSelectedEquipment(event.target.value)}
      >
        <option value="">Choose Equipment</option>

        {equipment
          .filter(item => item.status === "Available")
          .map(item => (
            <option key={item.id} value={item.id}>
              {item.assetTag} - {item.name}
            </option>
          ))}
      </select>

      <label>Employee Name</label>

      <input
        type="text"
        placeholder="Enter employee name"
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />

      <button className="save-btn"
        onClick={handleAssign}
       >
          Assign Equipment
      </button>

    </div>
  );
}

export default AssignmentForm;