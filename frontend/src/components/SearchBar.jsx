import "./SearchBar.css";

function SearchBar({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
}) {

    return(

        <div className="search-toolbar">

            <input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select
             value={selectedCategory}
             onChange={(event) => setSelectedCategory(event.target.value)}
            >

             {categories.map((category) => (

             <option
             key={category}
             value={category}
             >
            {category}
            </option>

          ))}

            </select>

            <select
             value={selectedStatus}
             onChange={(event) => setSelectedStatus(event.target.value)}
             >

              <option value="All Status">All Status</option>

              <option value="Available">Available</option>

              <option value="Issued">Issued</option>

           </select>

            <button>

                + Add Equipment

            </button>

        </div>

    );

}

export default SearchBar;