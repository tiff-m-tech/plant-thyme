import { altFromFileName } from "../../utils/altFromFileName";
import { useNavigate } from "react-router";
import Button from "../ui/Button";

export default function CollectionCard({ collectionId, imgPath, name }) {
    const navigate = useNavigate();

    return (
        <div className="collection-card">
            <img
                src={`/images/plants/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="collection-card-picture"
            />
            <div className="collection-card-right-container">
                <h3 className="collection-card-title">{name}</h3>
                <Button
                    innerText="See Plant Details"
                    onClick={() => navigate(`/currentCollection/${collectionId}`)}
                />
            </div>
        </div>
    );
}
