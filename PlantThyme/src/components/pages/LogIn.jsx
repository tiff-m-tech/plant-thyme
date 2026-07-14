import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { usePageTitle } from "../../hooks/usePageTitle";
import PageTitle from "../ui/PageTitle";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

// NOTE: In Unit 2 redo this so it's not hardcoded.
export default function LogIn({ setIsLoggedIn }) {
    const navigate = useNavigate();

    function handleLogin() {
        setIsLoggedIn(true);
        navigate("/home");
    }

    usePageTitle("Log In");

    return (
        <main id="logIn">
            <PageTitle title="Log In" />
            <form>
                <label htmlFor="username">
                    Username <span className="red-font">*</span>
                </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="♙ Type Your username"
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
                    required
                />
                <Button innerText="Login" type="button" onClick={handleLogin} />
            </form>
        </main>
    );
}
