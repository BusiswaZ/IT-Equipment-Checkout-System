import { useState } from "react";
import "./EquipmentForm.css";
import equipmentCategories from "../constants/equipmentCategories";

function EquipmentForm({ equipment, setEquipment }) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Laptop",
    assetTag: "",
    status: "Available",
    assignedTo: "",
  });
  const handleSubmit = () => {

  // Basic validation
  if (!formData.name || !formData.assetTag) {
    alert("Please fill in Equipment Name and Asset Tag.");
    return;
  }

  // Create new equipment
  const newEquipment = {
    id: equipment.length + 1,
    ...formData,
  };

  // Update equipment list
  setEquipment([...equipment, newEquipment]);

  // Clear the form
  setFormData({
    name: "",
    category: "Laptop",
    assetTag: "",
    status: "Available",
    assignedTo: "",
  });

  alert("Equipment added successfully!");

};
  return (
    <div className="equipment-form">

      <label>Equipment Name</label>
      <input
       type="text"
        placeholder="Enter equipment name"
       value={formData.name}
       onChange={(event) =>
        setFormData({
         ...formData,
         name: event.target.value,
        })
        }
     />

      <label>Category</label>
      <select
       value={formData.category}
       onChange={(event) =>
          setFormData({
          ...formData,
         category: event.target.value,
         })
       }
     >
      {equipmentCategories.map((category) => (
       <option
         key={category}
         value={category}
       >
        {category}
       </option>
    ))}
     </select>

      <label>Asset Tag</label>
      <input
       type="text"
       placeholder="e.g. LAP004"
       value={formData.assetTag}
        onChange={(event) =>
          setFormData({
          ...formData,
          assetTag: event.target.value,
        })
       }
      />

      <label>Status</label>
      <select
        value={formData.status}
        onChange={(event) =>
          setFormData({
          ...formData,
         status: event.target.value,
         })
       }
      >
        <option>Available</option>
        <option>Issued</option>
      </select>

      <label>Assigned To</label>
      <input
       type="text"
       placeholder="Optional"
       value={formData.assignedTo}
       onChange={(event) =>
         setFormData({
          ...formData,
         assignedTo: event.target.value,
       })
       }
      />

      <div className="form-buttons">

        <button className="cancel-btn">
          Cancel
        </button>

        <button
         className="save-btn"
         onClick={handleSubmit}
     >
        Save Equipment
      </button>

      </div>

    </div>
  );
}

export default EquipmentForm;