import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { currentCollection } from "./data/currentCollection";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import CurrentCollection from "./components/pages/CurrentCollection";
import AddPlant from "./components/pages/AddPlant";
import PlantDetails from "./components/pages/PlantDetails";

function App() {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // NOTE: Fake Fetch: Simulates loading data from an API with a delay. Replace in Unit 2!
        function fetchCollection() {
            return new Promise((resolve) => {
                // To simulate loading.
                setTimeout(() => resolve(currentCollection), 1000);
            });
        }

        async function loadCollection() {
            try {
                const data = await fetchCollection();
                setCollection(data);
            } catch (error) {
                console.error("Failed to load collection:", error);
            } finally {
                setLoading(false);
            }
        }

        loadCollection();
    }, []);

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

    // Originally used built in JavaScript delete, but it removes the value at an index and leaves an empty hole behind. Meant for objects not arrays.
    function removePlantFromCollection(idToRemove) {
        setCollection((prevCollection) =>
            prevCollection.filter((plant) => plant.collectionId !== idToRemove),
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
                    element={<CurrentCollection collection={collection} loading={loading} />}
                />
                <Route
                    path="/currentCollection/add"
                    element={<AddPlant addPlantToCollection={addPlantToCollection} />}
                />
                <Route
                    path="/currentCollection/:collectionId"
                    element={
                        <PlantDetails
                            collection={collection}
                            loading={loading}
                            removePlantFromCollection={removePlantFromCollection}
                        />
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
