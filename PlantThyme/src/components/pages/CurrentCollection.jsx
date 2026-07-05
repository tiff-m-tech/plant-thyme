import { altFromFileName } from "../../utils/altFromFileName";
import { leftDecoImagePath, rightDecoImagePath } from "../../data/constants";
import Button from "../layout/Button";
import { useNavigate } from "react-router";

export default function CurrentCollection() {
    const currentCollectionImagePath = "/images/brand/current-collection.png";
    const plantCount = null;
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
                <div>Plant Count: {plantCount}</div>
            ) : (
                <p>
                    You have not added any plants to your collection yet. Lets fill this list up
                    with leafy friends! :D
                </p>
            )}
            <Button innerText="Add Plant" onClick={() => navigate("/currentCollection/add")} />
        </main>
    );
}
