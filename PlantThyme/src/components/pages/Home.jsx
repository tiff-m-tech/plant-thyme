import { altFromFileName } from "../../utils/altFromFileName";

export default function Home() {
    const logoImagePath = "/images/brand/large-logo.png";
    const leftDecoImagePath = "/images/brand/left-deco-leaf.png";
    const rightDecoImagePath = "/images/brand/right-deco-leaf.png";
    const userName = "Tiffany";

    return (
        <main className="home">
            <img src={logoImagePath} alt={altFromFileName(logoImagePath)} className="large-logo" />
            <div className="welcome-row">
                <img src={leftDecoImagePath} alt={altFromFileName(leftDecoImagePath)} className="end-deco-image" />
                <h1 className="home-title">Welcome back, {userName}!</h1>
                <img src={rightDecoImagePath} alt={altFromFileName(rightDecoImagePath)} className="end-deco-image" />
            </div>
            <h2>Track your plants, save their stories, and watch them grow over time.</h2>
            <p>
                Plant Thyme helps you keep track of your growing plant collection, save details like when and where each plant was purchased, add care
                notes, and look back on progress photos over time.
            </p>
        </main>
    );
}
