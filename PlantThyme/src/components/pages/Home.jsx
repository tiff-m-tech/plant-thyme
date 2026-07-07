import { userName, leftDecoImagePath, rightDecoImagePath } from "../../data/constants";
import { altFromFileName } from "../../utils/altFromFileName";

export default function Home() {
    const logoImagePath = "/images/brand/large-logo.png";

    return (
        <main id="home">
            <img
                src={logoImagePath}
                alt={altFromFileName(logoImagePath)}
                className="large-page-image"
            />
            <div className="page-title-row">
                <img
                    src={leftDecoImagePath}
                    alt={altFromFileName(leftDecoImagePath)}
                    className="end-deco-image"
                />
                <h1 className="title">Welcome back, {userName}!</h1>
                <img
                    src={rightDecoImagePath}
                    alt={altFromFileName(rightDecoImagePath)}
                    className="end-deco-image"
                />
            </div>
            <h2>Grow your collection, one plant story at a time.</h2>
            <p>
                Plant Thyme helps you keep track of your plants, save meaningful details like where
                and when they were purchased, add other notes, and look back on progress photos as
                they grow.
            </p>
        </main>
    );
}
