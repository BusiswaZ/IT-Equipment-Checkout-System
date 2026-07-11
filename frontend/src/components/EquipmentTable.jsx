import "./EquipmentTable.css";
import equipment from "../data/equipmentData";

function EquipmentTable({ equipment }) {
  return (
    <div className="equipment-table">

      <table>

        <thead>

          <tr>
            <th>Asset Tag</th>
            <th>Equipment Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Assigned To</th>
          </tr>

        </thead>

        <tbody>

          {equipment.map((item) => (

            <tr key={item.id}>

              <td>{item.assetTag}</td>

              <td>{item.name}</td>

              <td>{item.category}</td>

              <td>
                  <span
                    className={
                      item.status === "Available"
                      ? "status available"
                      : "status issued"
                    }
                  >
                  {item.status}
                 </span>
                </td>

              <td>

                {item.assignedTo || "Unassigned"}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EquipmentTable;