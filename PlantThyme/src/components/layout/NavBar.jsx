import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null); // Reference to actual DOM nav

    useEffect(() => {
        function handleClickOutside(event) {
            // If the click wasn't inside the nav, close the menu.
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        // mousedown, not click - avoids fighting the hamburger's onClick.
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav ref={navRef}>
            <button
                className="hamburger"
                // !isOpen = opposite of whatever it currently is
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                ☰
            </button>
            <div className={isOpen ? "nav-links open" : "nav-links"}>
                <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                </Link>
                <Link to="/currentCollection" onClick={() => setIsOpen(false)}>
                    My Leafy Collection
                </Link>
            </div>
        </nav>
    );
}
