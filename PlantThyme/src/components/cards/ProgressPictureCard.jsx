import { altFromFileName } from "../../utils/altFromFileName";

export default function ProgressPictureCard({ src, date, fileName }) {
    return (
        <div className="progress-picture-card">
            <div className="progress-picture-date">{date}</div>
            <img src={src} alt={altFromFileName(fileName)} className="progress-picture" />
        </div>
    );
}
