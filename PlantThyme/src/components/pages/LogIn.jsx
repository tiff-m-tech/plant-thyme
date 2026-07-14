import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { usePageTitle } from "../../hooks/usePageTitle";
import PageTitle from "../ui/PageTitle";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

// NOTE: Hardcoded login for now — replace with real auth in Unit 2.
const HARDCODED_USERNAME = "tiffany";
const HARDCODED_PASSWORD = "123";

export default function LogIn({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
            setIsLoggedIn(true);
            navigate("/home");
        } else {
            setError("Incorrect username or password.");
        }
    }

    usePageTitle("Log In");

    return (
        <main id="logIn">
            <PageTitle title="Log In" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username <span className="red-font">*</span>
                </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="♙ Type Your username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                />
                <label htmlFor="password">
                    Password <span className="red-font">*</span>
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="🔒︎ Type Your Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                {error && <p className="red-font">{error}</p>}
                <Button innerText="Login" type="submit" />
            </form>
        </main>
    );
}
