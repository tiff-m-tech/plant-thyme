import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse, faLeaf, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null); // Reference to actual DOM nav
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            // If the click wasn't inside the nav, close the menu.
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        // TODO: need to remove for project requirements, no DOM?
        // mousedown, not click - avoids fighting the hamburger's onClick.
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleLogout() {
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <>
            {isLoggedIn ? (
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
                        <Link to="/home" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faPhone} /> Contact
                        </Link>
                        <Link to="/currentCollection" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faLeaf} /> My Leafy Collection
                        </Link>
                        <Link
                            to="/"
                            onClick={() => {
                                setIsOpen(false);
                                handleLogout();
                            }}
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} /> Log Out
                        </Link>
                    </div>
                </nav>
            ) : (
                <></>
            )}
        </>
    );
}
