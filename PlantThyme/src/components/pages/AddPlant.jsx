import Button from "../layout/Button";
import plantDatabase from "../../data/plantDatabase.json";
import { useState } from "react";
import SearchCard from "../layout/SearchCard";

export default function AddPlant() {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    const filteredPlants = plantDatabase.filter((plant) =>
        plant.name.toLowerCase().trim().includes(searchValue),
    );

    console.log("Filtered Plant List", filteredPlants);

    return (
        <main id="addPlant">
            <div>
                <input
                    type="search"
                    name="search"
                    placeholder="Type a plant name here..."
                    value={searchValue}
                    onChange={handleChange}
                    required
                />
                <Button innerText="Search" />
            </div>
            <div className="search-cards-container">
                {filteredPlants.map((plant) => (
                    <SearchCard key={plant.id} imgPath={plant.image} name={plant.name} />
                ))}
            </div>
        </main>
    );
}
