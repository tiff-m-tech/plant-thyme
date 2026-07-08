import { useState } from "react";
import { useNavigate } from "react-router";
import plantDatabase from "../../data/plantDatabase.json";
import Button from "../layout/Button";
import SearchCard from "../cards/SearchCard";
import PageTitle from "../layout/PageTitle";
import SearchBar from "../layout/SearchBar";

export default function AddPlant({ addPlantToCollection }) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const navigate = useNavigate();

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
            <PageTitle title="Plant Search" />
            <div>
                {/* To go back to last page using useNavigate pass -1 as argument to the navigate function, this tells the browser to move back one step in its history stack */}
                <Button innerText="Back" onClick={() => navigate(-1)} />
                <SearchBar
                    value={searchValue}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    placeholder="Find your next leafy friend..."
                />
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
