import { altFromFileName } from "../../utils/altFromFileName";

export default function ProgressPictureCard({ src, date, imgPath = "Progress Picture" }) {
    return (
        <div className="progress-picture-card">
            <div className="progress-picture-date">{date}</div>
            <img src={src} alt={altFromFileName(imgPath)} className="progress-picture" />
        </div>
    );
}
