import { usePageTitle } from "../../hooks/usePageTitle";
import PageTitle from "../ui/PageTitle";
import Button from "../ui/Button";

export default function LogIn() {
    usePageTitle("Log In");

    return (
        <main id="logIn">
            <PageTitle title="Log In" />
            <form>
                <label htmlFor="userName">
                    UserName <span className="red-font">*</span>
                </label>
                <input
                    id="userName"
                    type="text"
                    userName="userName"
                    placeholder="Type Your Username"
                    required
                />
                <label htmlFor="password">
                    Email <span className="red-font">*</span>
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Type Your Password"
                    required
                />
                <Button innerText="Login" type="submit" className="contact-submit-btn" />
            </form>
        </main>
    );
}
