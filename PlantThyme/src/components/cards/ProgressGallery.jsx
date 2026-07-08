import { useState } from "react";
import PageTitle from "../layout/PageTitle";
import ProgressPictureCard from "./ProgressPictureCard";

// https://www.youtube.com/shorts/bTll3osO074 tutorial for image preview

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
                        // URL.createObjectURL creates a temporary in-browser URL (blob:...) for the
                        // selected file so we can preview it immediately. This is temporary and does, real saving/upload comes in Unit 2.
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
