import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { altFromFileName } from "../../utils/altFromFileName";
import Button from "../ui/Button";
import PageTitle from "../ui/PageTitle";
import ProgressGallery from "../features/ProgressGallery";
import Loading from "../ui/Loading";
import SectionDivider from "../ui/SectionDivider";
import { usePageTitle } from "../../hooks/usePageTitle";

// NOTE: This page will need to be updated in Unit 2 with backend for saving info.

export default function PlantDetails({ collection, loading, removePlantFromCollection }) {
    const navigate = useNavigate();
    // Pramas gives you a string so convert with Number.
    const { collectionId } = useParams();

    // Must stay before state or page will be blank when refreshed due to setTimeOut()
    if (loading) return <Loading />;

    const plant = collection.find((plant) => plant.collectionId === Number(collectionId));
    if (!plant) return <p>Plant not found!</p>;

    const [detailsData, setDetailsData] = useState({
        purchaseDate: plant.purchaseDate,
        storePurchasedFrom: plant.purchaseStore,
        cost: plant.cost,
        notes: plant.notes,
    });
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setDetailsData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSave() {
        setIsEditing(false);
    }

    function handleRemove() {
        if (window.confirm(`Remove ${plant.name} from your collection?`)) {
            removePlantFromCollection(plant.collectionId);
            navigate("/currentCollection");
        }
    }

    usePageTitle("Plant Details");

    return (
        <main id="plantDetails">
            <Button innerText="Back" onClick={() => navigate(-1)} className="back-btn" />
            <img
                src={`/images/plants/${plant.image}`}
                alt={altFromFileName(plant.image)}
                className="details-page-image"
            />
            <PageTitle title={plant.name} />
            <h2>Plant Details</h2>
            <form>
                <label htmlFor="purchasedDate">Purchased Date:</label>
                <input
                    id="purchaseDate"
                    type="text"
                    name="purchaseDate"
                    value={detailsData.purchaseDate}
                    disabled={!isEditing}
                    onChange={handleChange}
                />
                <label htmlFor="storePurchasedFrom">Store Purchased From:</label>
                <input
                    id="storePurchasedFrom"
                    type="text"
                    name="storePurchasedFrom"
                    value={detailsData.storePurchasedFrom}
                    disabled={!isEditing}
                    onChange={handleChange}
                />
                <label htmlFor="cost">Cost:</label>
                <input
                    id="cost"
                    type="text"
                    name="cost"
                    value={detailsData.cost}
                    disabled={!isEditing}
                    onChange={handleChange}
                />
                <label htmlFor="notes">Other Notes</label>
                <textarea
                    id="notes"
                    name="notes"
                    placeholder="Your notes here..."
                    rows="6"
                    maxLength="1000"
                    value={detailsData.notes}
                    disabled={!isEditing}
                    onChange={handleChange}
                />
                {isEditing ? (
                    <Button innerText="Save" onClick={() => handleSave()} />
                ) : (
                    <Button innerText="Edit" onClick={() => setIsEditing(true)} />
                )}
            </form>
            <SectionDivider />
            <ProgressGallery plant={plant} />
            <SectionDivider />
            <Button innerText="Remove Plant" onClick={handleRemove} className="remove-btn" />
        </main>
    );
}
