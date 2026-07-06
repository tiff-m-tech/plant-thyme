import Button from "../layout/Button";
import plantDatabase from "../../data/plantDatabase.json";
import { useState } from "react";
import SearchCard from "../cards/SearchCard";

export default function AddPlant({ addPlantToCollection }) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSearch() {
        if (searchValue.trim().length <= 1) return;
        const results = plantDatabase.filter((plant) =>
            plant.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()),
        );
        setFilteredPlants(results);
        setHasSearched(true);
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
                    <SearchCard
                        key={plant.id}
                        imgPath={plant.image}
                        name={plant.name}
                        plant={plant}
                        addPlantToCollection={addPlantToCollection}
                    />
                ))}
                {hasSearched && filteredPlants.length === 0 && (
                    <p>No results found, please search again!</p>
                )}
            </div>
        </main>
    );
}
