import { altFromFileName } from "../../utils/altFromFileName";
import Button from "../layout/Button";
import { useNavigate } from "react-router";

export default function CollectionCard({ collectionId, imgPath, name, removePlantFromCollection }) {
    const navigate = useNavigate();

    return (
        <div className="collection-card-container">
            <img
                src={`/images/plants/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="collection-card-picture"
            />
            <div className="collection-card-right-container">
                <div>{name}</div>
                <Button
                    innerText="Remove Plant"
                    onClick={() => removePlantFromCollection(collectionId)}
                />
                <Button
                    innerText="See Plant Details"
                    onClick={() => navigate(`/currentCollection/${collectionId}`)}
                />
            </div>
        </div>
    );
}
