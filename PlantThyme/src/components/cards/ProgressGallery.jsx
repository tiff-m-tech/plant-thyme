import { useState } from "react";
import PageTitle from "../layout/PageTitle";
import ProgressPictureCard from "./ProgressPictureCard";

export default function ProgressGallery({ plant }) {
    const pictures = plant.progressPictures;
    const [selectedImage, setSelectedImage] = useState("");
    const today = new Date().toLocaleDateString("en-US");

    return (
        <section id="progressGallery">
            <PageTitle title="Progress Pictures" />
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files?.[0];
                        // URL.createObjectURL creates temporary in-browser URL (blob:...) for selected file so we can preview it immediately
                        // NOTE: Change this in Unit 2 to save file.
                        setSelectedImage(file ? URL.createObjectURL(file) : undefined);
                    }}
                />
            </div>
            {pictures.map((plant) => (
                <ProgressPictureCard
                    key={plant.id}
                    imgPath={plant.picture}
                    date={plant.date}
                    src={`/images/progressPictures/${plant.picture}`}
                />
            ))}
            {selectedImage && <ProgressPictureCard src={selectedImage} date={today} />}
        </section>
    );
}
