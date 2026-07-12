import ReturnForm from "../components/ReturnForm";
import "./ReturnEquipment.css";

function ReturnEquipment({ equipment, setEquipment }) {
  return (
    <>
      <h1 className="page-title">Return Equipment</h1>

      <p className="page-subtitle">
        Return issued company equipment
      </p>

      <ReturnForm
        equipment={equipment}
        setEquipment={setEquipment}
      />
    </>
  );
}

export default ReturnEquipment;