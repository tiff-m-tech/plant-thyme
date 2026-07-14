import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faShower, faSeedling } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../ui/PageTitle";

export default function CareInstructions({ plant }) {
    return (
        <section id="careInstructions">
            <PageTitle title="Care Instructions" />
            <table className="care-table">
                <thead>
                    <tr>
                        <th scope="col">Requirement</th>
                        <th scope="col">Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <FontAwesomeIcon icon={faSun} className="sun-icon" /> Light
                        </th>
                        <td>{plant.careInstructions[0].light}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FontAwesomeIcon icon={faShower} className="water-icon" /> Water
                        </th>
                        <td>{plant.careInstructions[1].water}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FontAwesomeIcon icon={faSeedling} className="fertilize-icon" />{" "}
                            Fertilize
                        </th>
                        <td>{plant.careInstructions[2].fertilize}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
