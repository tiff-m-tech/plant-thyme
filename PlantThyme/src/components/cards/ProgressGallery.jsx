import PageTitle from "../layout/PageTitle";
import ProgressPictureCard from "./ProgressPictureCard";

export default function ProgressGallery({ plant }) {
    const pictures = plant.progressPictures;
    console.log(pictures);
    return (
        <section id="progressGallery">
            <PageTitle title="Progress Pictures" />
            {[...pictures].map((plant) => (
                <ProgressPictureCard key={plant.id} imgPath={plant.picture} date={plant.date} />
            ))}
        </section>
    );
}
