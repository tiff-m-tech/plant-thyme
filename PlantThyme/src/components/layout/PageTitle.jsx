import { leftDecoImagePath, rightDecoImagePath } from "../../data/constants";
import { altFromFileName } from "../../utils/altFromFileName";

export default function PageTitle({ title }) {
    return (
        <div className="page-title-row">
            <img
                src={leftDecoImagePath}
                alt={altFromFileName(leftDecoImagePath)}
                className="end-deco-image"
            />
            <h1 className="title">{title}</h1>
            <img
                src={rightDecoImagePath}
                alt={altFromFileName(rightDecoImagePath)}
                className="end-deco-image"
            />
        </div>
    );
}
