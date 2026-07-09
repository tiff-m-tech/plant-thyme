import { altFromFileName } from "../../utils/altFromFileName";

export default function PageTitle({ title }) {
    const leftDecoImagePath = "/images/brand/left-deco-leaf.png";
    const rightDecoImagePath = "/images/brand/right-deco-leaf.png";

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
