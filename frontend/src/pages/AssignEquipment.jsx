import AssignmentForm from "../components/AssignmentForm";
import "./AssignEquipment.css";

function AssignEquipment({ equipment, setEquipment }) {
  return (
    <>
      <h1 className="page-title">Assign Equipment</h1>

      <p className="page-subtitle">
        Assign company equipment to an employee
      </p>

      <AssignmentForm
        equipment={equipment}
        setEquipment={setEquipment}
      />
    </>
  );
}

export default AssignEquipment;