import { useState } from "react";
import SearchBar from "../components/SearchBar";
import EquipmentTable from "../components/EquipmentTable";
import "./Equipment.css";

function Equipment({ equipment }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const categories = [
    "All Categories",
    ...new Set(equipment.map((item) => item.category)),
  ];
  const filteredEquipment = equipment.filter((item) => {

  const matchesSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All Categories" ||
    item.category === selectedCategory;

  const matchesStatus =
  selectedStatus === "All Status" ||
  item.status === selectedStatus;  

  return matchesSearch && matchesCategory && matchesStatus;

});
  return (
    <>

      <h1 className="page-title">
        Equipment
      </h1>

      <p className="page-subtitle">
        Manage all company equipment
      </p>

     <SearchBar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
      categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
     />

     <EquipmentTable
       equipment={filteredEquipment}
    />

    </>
  );
}

export default Equipment;