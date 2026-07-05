import Button from "../layout/Button";
import plantDatabase from "../../data/plantDatabase.json";
import { useState } from "react";

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
            <input
                type="search"
                name="search"
                placeholder="Type a plant name here..."
                value={searchValue}
                onChange={handleChange}
                required
            />
            <Button innerText="Search" />
        </main>
    );
}
