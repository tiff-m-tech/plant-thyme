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

function App() {
    const [collection, setCollection] = useState(currentCollection);

    console.log("new collection", collection);

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
        console.log("AddPlant was fired.");
        console.log(newCollectionId);
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/currentCollection"
                    element={<CurrentCollection collection={collection} />}
                />
                <Route
                    path="/currentCollection/add"
                    element={<AddPlant addPlantToCollection={addPlantToCollection} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
