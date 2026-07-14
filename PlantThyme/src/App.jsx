import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { currentCollection } from "./data/currentCollection";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import CurrentCollection from "./components/pages/CurrentCollection";
import AddPlant from "./components/pages/PlantSearch";
import PlantDetails from "./components/pages/PlantDetails";
import LogIn from "./components/pages/LogIn";
import NotFound from "./components/pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    // TODO: Set original state back to false when done testing.
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        // NOTE: Fake Fetch: Simulates loading data from an API with a delay. Replace in Unit 2!
        // TODO: Change setTimeout back to 1000 when done testing.
        function fetchCollection() {
            return new Promise((resolve) => {
                // To simulate loading.
                setTimeout(() => resolve(currentCollection), 0);
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
        const newCollectionId =
            collection.length > 0 ? Math.max(...collection.map((p) => p.collectionId)) + 1 : 1;
        const newEntry = {
            collectionId: newCollectionId,
            plantId: plant.id,
            name: plant.name,
            image: plant.image,
            purchaseDate: "",
            purchaseStore: "",
            cost: "",
            notes: "",
            progressPictures: [],
            careInstructions: [
                { light: plant.careInstructions[0].light },
                { water: plant.careInstructions[1].water },
                { fertilize: plant.careInstructions[2].fertilize },
            ],
        };
        setCollection((prev) => [...prev, newEntry]);
    }

    // Originally used built in JavaScript delete, but it removes the value at an index and leaves an empty hole behind. Meant for objects not arrays.
    function removePlantFromCollection(idToRemove) {
        setCollection((prevCollection) =>
            prevCollection.filter((plant) => plant.collectionId !== idToRemove),
        );
    }

    return (
        <>
            <ScrollToTop />
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="*" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
            )}

            <Footer />
        </>
    );
}

export default App;
