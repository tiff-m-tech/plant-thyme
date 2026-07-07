import { useNavigate } from "react-router";
import { altFromFileName } from "../../utils/altFromFileName";
import CollectionCard from "../cards/CollectionCard";
import Button from "../layout/Button";
import PageTitle from "../layout/PageTitle";

export default function CurrentCollection({ collection, removePlantFromCollection }) {
    const currentCollectionImagePath = "/images/brand/current-collection.png";
    const plantCount = collection.length;
    const navigate = useNavigate();

    return (
        <main id="currentCollection">
            <img
                src={currentCollectionImagePath}
                alt={altFromFileName(currentCollectionImagePath)}
                className="large-page-image"
            />
            <PageTitle title="My Leafy Collection" />
            {plantCount ? (
                <div className="collection-cards-container">
                    <div className="collection-page-btn-h1-row">
                        <Button
                            innerText="Add Plant"
                            onClick={() => navigate("/currentCollection/add")}
                        />
                        <h2 className="plant-count">Plant Count: {plantCount}</h2>
                    </div>
                    {[...collection]
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
            ) : (
                <>
                    <p>
                        You have not added any plants to your collection yet. Lets fill this list up
                        with leafy friends! 🪴🥰
                    </p>
                    <Button
                        innerText="Add Plant"
                        onClick={() => navigate("/currentCollection/add")}
                    />
                </>
            )}
        </main>
    );
}
