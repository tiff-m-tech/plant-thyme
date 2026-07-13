import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faShower, faSeedling } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../ui/PageTitle";

export default function CareInstructions({ plant }) {
    return (
        <section id="careInstructions">
            <div className="care-instructions-container">
                <PageTitle title="Care Instructions" className="care-instructions-title" />
                <div>
                    <FontAwesomeIcon icon={faSun} className="sun-icon" />
                    <strong>Light:</strong> {plant.careInstructions[0].light}
                </div>
                <div>
                    <FontAwesomeIcon icon={faShower} className="water-icon" />
                    <strong>Water:</strong> {plant.careInstructions[1].water}
                </div>
                <div>
                    <FontAwesomeIcon icon={faSeedling} className="fertilize-icon" />
                    <strong>Fertilize:</strong> {plant.careInstructions[2].fertilize}
                </div>
            </div>
        </section>
    );
}
