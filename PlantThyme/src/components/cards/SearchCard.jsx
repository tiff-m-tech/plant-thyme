import Button from "../layout/Button";
import { altFromFileName } from "../../utils/altFromFileName";

export default function SearchCard({ imgPath, name, plant, addPlantToCollection }) {
    return (
        <div className="search-card-container">
            <img
                src={`/images/plants/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="search-card-picture"
            />
            <div className="search-card-right-container">
                <div>{name}</div>
                <Button innerText="Add Plant" onClick={() => addPlantToCollection(plant)} />
            </div>
        </div>
    );
}
