import "./SummaryCards.css";
import equipment from "../data/equipmentData";

function SummaryCards() {

  const totalEquipment = equipment.length;

  const availableEquipment = equipment.filter(
    (item) => item.status === "Available"
   ).length;

  const issuedEquipment = equipment.filter(
   (item) => item.status === "Issued"
   ).length;

  const employeesWithEquipment = new Set(
   equipment
    .filter((item) => item.assignedTo)
    .map((item) => item.assignedTo)
   ).size;
  return (
    <section className="summary-cards">

      <div className="card">
        <h3>Total Equipment</h3>
        <h1>{totalEquipment}</h1>
      </div>

      <div className="card">
        <h3>Available</h3>
        <h1>{availableEquipment}</h1>
      </div>

      <div className="card">
        <h3>Issued</h3>
        <h1>{issuedEquipment}</h1>
      </div>

      <div className="card">
        <h3>Employees</h3>
        <h1>{employeesWithEquipment}</h1>
      </div>

    </section>
  );
}

export default SummaryCards;