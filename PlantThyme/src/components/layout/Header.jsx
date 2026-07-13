import NavBar from "./NavBar";
import { Link } from "react-router";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
    return (
        <header>
            <div className="header-left">
                <Link to="/home">
                    <img
                        href="index.html"
                        src="/images/brand/mini-logo.png"
                        alt="Mini Plant Thyme Logo"
                        className="mini-logo"
                    />
                </Link>
                <span className="header-brand-name">Plant Thyme</span>
            </div>
            <NavBar />
        </header>
    );
}
