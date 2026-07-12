import EquipmentForm from "../components/EquipmentForm";

function AddEquipment({ equipment,setEquipment, }) {
  return (
    <div>
      <h1>Add New Equipment</h1>

     <EquipmentForm equipment={equipment} setEquipment={setEquipment}
     />
    </div>
  );
}

export default AddEquipment;