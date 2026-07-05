import { altFromFileName } from "../../utils/altFromFileName";
import { userName, leftDecoImagePath, rightDecoImagePath } from "../../data/constants";

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
            <h2>Track your plants, save their stories, and watch them grow over time.</h2>
            <p>
                Plant Thyme helps you keep track of your growing plant collection, save details like
                when and where each plant was purchased, add care notes, and look back on progress
                photos over time.
            </p>
        </main>
    );
}
