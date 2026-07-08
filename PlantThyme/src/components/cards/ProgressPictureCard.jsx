import { altFromFileName } from "../../utils/altFromFileName";

export default function ProgressPictureCard({ imgPath, date }) {
    return (
        <div className="progress-picture-container">
            <div className="progress-picture-date">{date}</div>
            <img
                src={`/images/progressPictures/${imgPath}`}
                alt={altFromFileName(imgPath)}
                className="progress-picture"
            />
        </div>
    );
}
