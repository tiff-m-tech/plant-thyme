import Button from "../layout/Button";
import { altFromFileName } from "../../utils/altFromFileName";
import { useNavigate } from "react-router";

export default function SearchCard({ imgPath, name, plant, addPlantToCollection }) {
    const navigate = useNavigate();

    return (
        <div className="search-card-container">
            <img
                src={`/images/plants/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="search-card-picture"
            />
            <div className="search-card-right-container">
                <div>{name}</div>
                <Button
                    innerText="Add Plant"
                    onClick={() => {
                        addPlantToCollection(plant);
                        navigate("/currentCollection");
                    }}
                />
            </div>
        </div>
    );
}
