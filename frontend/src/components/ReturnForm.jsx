import { useState } from "react";
import "./ReturnForm.css";

function ReturnForm({ equipment, setEquipment }) {

  const [selectedEquipment, setSelectedEquipment] = useState("");

  const handleReturn = () => {

    if (!selectedEquipment) {
      alert("Please select equipment.");
      return;
    }

    const updatedEquipment = equipment.map((item) => {

      if (item.id === Number(selectedEquipment)) {

        return {
          ...item,
          status: "Available",
          assignedTo: "",
        };

      }

      return item;

    });

    setEquipment(updatedEquipment);

    setSelectedEquipment("");

    alert("Equipment returned successfully!");

  };

  return (
    <div className="equipment-form">

      <label>Select Equipment to Return</label>

      <select
        value={selectedEquipment}
        onChange={(event) => setSelectedEquipment(event.target.value)}
      >
        <option value="">Choose Equipment</option>

        {equipment
          .filter(item => item.status === "Issued")
          .map(item => (
            <option key={item.id} value={item.id}>
              {item.assetTag} - {item.name} ({item.assignedTo})
            </option>
          ))}
      </select>

      <button
        className="save-btn"
        onClick={handleReturn}
      >
        Return Equipment
      </button>

    </div>
  );
}

export default ReturnForm;