import "./App.css";
import { useState } from "react";
import { currentCollection } from "./data/currentCollection";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import CurrentCollection from "./components/pages/CurrentCollection";
import AddPlant from "./components/pages/AddPlant";
import PlantDetails from "./components/pages/PlantDetails";

function App() {
    const [collection, setCollection] = useState(currentCollection);

    function addPlantToCollection(plant) {
        const newCollectionId = Math.max(...collection.map((plant) => plant.collectionId)) + 1;
        const newEntry = {
            collectionId: newCollectionId,
            plantId: plant.id,
            name: plant.name,
            image: plant.image,
            purchaseDate: "",
            purchaseStore: "",
            cost: null,
            notes: "",
            progressPictures: [],
        };
        setCollection([...collection, newEntry]);
    }

    // originally used delete, but it removes the value at an index and leaves an empty hole behind
    function removePlantFromCollection(idToRemove) {
        setCollection((currentCollection) =>
            currentCollection.filter((plant) => plant.collectionId !== idToRemove),
        );
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/currentCollection"
                    element={
                        <CurrentCollection
                            collection={collection}
                            removePlantFromCollection={removePlantFromCollection}
                        />
                    }
                />
                <Route
                    path="/currentCollection/add"
                    element={<AddPlant addPlantToCollection={addPlantToCollection} />}
                />
                <Route
                    path="/currentCollection/:collectionId"
                    element={<PlantDetails collection={collection} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
