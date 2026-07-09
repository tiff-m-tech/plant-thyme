import { useNavigate } from "react-router";
import { userName } from "../../data/constants";
import { altFromFileName } from "../../utils/altFromFileName";
import PageTitle from "../ui/PageTitle";
import Button from "../ui/Button";

export default function Home() {
    const logoImagePath = "/images/brand/large-logo.webp";
    const navigate = useNavigate();

    return (
        <main id="home">
            <img
                src={logoImagePath}
                alt={altFromFileName(logoImagePath)}
                className="large-page-image"
            />
            <PageTitle title={`Welcome back, ${userName}!`} />
            <h2>Grow your collection, one plant story at a time.</h2>
            <p>
                Every plant has a little history, from the day you brought it home to the first new
                leaf you noticed. Plant Thyme gives those memories a place to grow.
            </p>
            <div>
                <h3>🌿 Keep Tabs on Your Leaves</h3>
                Track all your leafy friends in one cozy place.
            </div>
            <div>
                <h3>📝 Jot Down the Dirt</h3>
                Save notes, purchase details, and plant memories.
            </div>
            <div>
                <h3>📸 See How They’ve Grown</h3>
                Look back on progress photos over time.
            </div>
            <Button innerText="View My Collection" onClick={() => navigate("/currentCollection")} />
        </main>
    );
}
