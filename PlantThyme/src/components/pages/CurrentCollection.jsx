import { altFromFileName } from "../../utils/altFromFileName";
import { leftDecoImagePath, rightDecoImagePath } from "../../data/constants";
import Button from "../layout/Button";
import { useNavigate } from "react-router";
import CollectionCard from "../cards/CollectionCard";

export default function CurrentCollection({ collection, removePlantFromCollection }) {
    const currentCollectionImagePath = "/images/brand/current-collection.png";
    // const plantCount = null;
    let plantCount = collection.length;
    const navigate = useNavigate();

    return (
        <main id="currentCollection">
            <img
                src={currentCollectionImagePath}
                alt={altFromFileName(currentCollectionImagePath)}
                className="large-page-image"
            />
            <div className="page-title-row">
                <img
                    src={leftDecoImagePath}
                    alt={altFromFileName(leftDecoImagePath)}
                    className="end-deco-image"
                />
                <h1 className="title">Current Plant Collection</h1>
                <img
                    src={rightDecoImagePath}
                    alt={altFromFileName(rightDecoImagePath)}
                    className="end-deco-image"
                />
            </div>
            {plantCount ? (
                <div className="collection-cards-container">
                    <div className="collection-page-btn-h1-row">
                        <Button
                            innerText="Add Plant"
                            onClick={() => navigate("/currentCollection/add")}
                        />
                        <h2 className="plant-count">Plant Count: {plantCount}</h2>
                    </div>
                    {collection.map((plant) => (
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
                        with leafy friends! :D
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
