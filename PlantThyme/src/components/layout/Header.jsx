import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <img src="/images/brand/mini-logo.png" alt="Mini Plant Thyme Logo" className="mini-logo" />
                <span className="header-brand-name">Plant Thyme</span>
            </div>

            <NavBar />
        </header>
    );
}
