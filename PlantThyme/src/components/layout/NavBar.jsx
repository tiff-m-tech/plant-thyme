import { Link } from "react-router";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/currentCollection">My Leafy Collection</Link>
        </nav>
    );
}
