import { useState } from "react";
import { useNavigate } from "react-router";
import { altFromFileName } from "../../utils/altFromFileName";
import CollectionCard from "../cards/CollectionCard";
import Button from "../layout/Button";
import PageTitle from "../layout/PageTitle";
import SearchBar from "../layout/SearchBar";

export default function CurrentCollection({ collection, loading, removePlantFromCollection }) {
    const currentCollectionImagePath = "/images/brand/current-collection.png";
    // Use line below to test when you have no plants in the collection.
    // const plantCount = 0;
    const plantCount = collection.length;
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    // filter the collection by search term or show all if no term
    const displayedPlants = searchValue.trim()
        ? collection.filter((plant) =>
              plant.name.toLowerCase().includes(searchValue.toLowerCase().trim()),
          )
        : collection;

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSearch() {
        if (searchValue.trim().length <= 1) return;
        const results = collection.filter((plant) =>
            plant.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()),
        );
    }

    if (loading) {
        return (
            <main id="currentCollection">
                <img
                    src={currentCollectionImagePath}
                    alt={altFromFileName(currentCollectionImagePath)}
                    className="large-page-image"
                />
                <PageTitle title="My Leafy Collection" />
                <div>
                    <div className="collection-page-btn-h1-row">
                        <Button
                            innerText="Add Plant"
                            onClick={() => navigate("/currentCollection/add")}
                        />
                        <h2 className="plant-count">Plant Count: {plantCount}</h2>
                    </div>
                    <SearchBar
                        value={searchValue}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        placeholder="Search your leafy friends..."
                        showButton={false}
                    />
                    <div className="loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main id="currentCollection">
            <img
                src={currentCollectionImagePath}
                alt={altFromFileName(currentCollectionImagePath)}
                className="large-page-image"
            />
            <PageTitle title="My Leafy Collection" />
            {plantCount === 0 ? (
                <div>
                    <p>
                        You have not added any plants to your collection yet. Lets fill this list up
                        with leafy friends! 🪴🥰
                    </p>
                    <Button
                        innerText="Add Plant"
                        onClick={() => navigate("/currentCollection/add")}
                    />
                </div>
            ) : displayedPlants.length === 0 ? (
                <div>
                    <div className="collection-page-btn-h1-row">
                        <Button
                            innerText="Add Plant"
                            onClick={() => navigate("/currentCollection/add")}
                        />
                        <h2 className="plant-count">Plant Count: {plantCount}</h2>
                    </div>
                    <SearchBar
                        value={searchValue}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        placeholder="Search your leafy friends..."
                        showButton={false}
                    />
                    <p>No plants match your search.</p>
                </div>
            ) : (
                <div className="collection-cards-container">
                    <div className="collection-page-btn-h1-row">
                        <Button
                            innerText="Add Plant"
                            onClick={() => navigate("/currentCollection/add")}
                        />
                        <h2 className="plant-count">Plant Count: {plantCount}</h2>
                    </div>
                    <SearchBar
                        value={searchValue}
                        onChange={handleChange}
                        onSearch={handleSearch}
                        placeholder="Search your leafy friends..."
                        showButton={false}
                    />
                    {[...displayedPlants]
                        // localeCompare compares a reference string with a target string and returns a negative, zero, or positive number to indicate their relative alphabetical sort order
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((plant) => (
                            <CollectionCard
                                key={plant.collectionId}
                                collectionId={plant.collectionId}
                                imgPath={plant.image}
                                name={plant.name}
                                removePlantFromCollection={removePlantFromCollection}
                            />
                        ))}
                </div>
            )}
        </main>
    );
}
// {plantCount === 0 ? (
//     <p>You have no plants yet...</p>
// ) : displayedPlants.length === 0 ? (
//     <p>No plants match your search.</p>
// ) : (
//     <div>{/* the cards */}</div>
// )}
