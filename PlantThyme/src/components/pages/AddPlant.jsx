import Button from "../layout/Button";
import plantDatabase from "../../data/plantDatabase.json";
import { useState } from "react";
import SearchCard from "../layout/SearchCard";

export default function AddPlant() {
    const [searchValue, setSearchValue] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([]);

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSearch() {
        if (searchValue.trim().length <= 1) return; // don't want to search with no value or 1 char - would bring up every plant that has that letter

        const results = plantDatabase.filter((plant) =>
            plant.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()),
        );
        setFilteredPlants(results);
    }

    return (
        <main id="addPlant">
            <div>
                <input
                    type="search"
                    name="search"
                    placeholder="Type a plant name here..."
                    value={searchValue}
                    onChange={handleChange}
                />
                <Button innerText="Search" onClick={handleSearch} />
            </div>
            <div className="search-cards-container">
                {filteredPlants.map((plant) => (
                    <SearchCard key={plant.id} imgPath={plant.image} name={plant.name} />
                ))}
            </div>
        </main>
    );
}
