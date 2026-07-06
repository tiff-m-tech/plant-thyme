import { altFromFileName } from "../../utils/altFromFileName";
import Button from "./Button";

export default function CollectionCard({ imgPath, name }) {
    return (
        <div className="collection-card-container">
            <img
                src={`/images/plants/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="collection-card-picture"
            />
            <div className="collection-card-right-container">
                <div>{name}</div>
                <Button innerText="Remove Plant" />
            </div>
        </div>
    );
}
