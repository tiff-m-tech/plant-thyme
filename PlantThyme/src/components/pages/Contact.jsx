import { useState } from "react";
import { altFromFileName } from "../../utils/altFromFileName";
import { leftDecoImagePath, rightDecoImagePath } from "../../data/constants";
import Button from "../layout/Button";

export default function Contact() {
    const contactImagePath = "/images/brand/contact.png";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    // event.target is the DOM element that fired the event, the actual input the user typed in
    // { name, value } is destructuring
    // using setFormData and passing a function, passes current state as prev, using spread operator copies every key/value pair from previous state object
    // [name]: value uses square brackets = "computed property name"
    // it evaluates the `name` variable and uses its value as the key
    // ie if name is "email", this becomes email: value
    // aka take everything from the old state and overwrite the one field that changed
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault(); // stops browser from reloading the page
        console.log("Submitting", formData); // later change this to send values to backend
    }

    return (
        <main id="contact">
            <img
                src={contactImagePath}
                alt={altFromFileName(contactImagePath)}
                className="large-page-image"
            />
            <div className="page-title-row">
                <img
                    src={leftDecoImagePath}
                    alt={altFromFileName(leftDecoImagePath)}
                    className="end-deco-image"
                />
                <h1 className="title">Contact</h1>
                <img
                    src={rightDecoImagePath}
                    alt={altFromFileName(rightDecoImagePath)}
                    className="end-deco-image"
                />
            </div>
            <h2>Questions or Feedback?</h2>
            <div>
                Feel free to reach out with any questions or suggestions you have! I'd love to hear
                from you.
            </div>
            <div>
                <strong>✉️ Email:</strong> support@plantthyme.com
            </div>
            <div>
                <strong>☎ Phone:</strong> 610-867-5309
            </div>
            <div>
                <strong>🏠Address:</strong>
                <br />
                Plant Thyme
                <br />
                123 Greenhouse Lane
                <br />
                Sproutville, PA 19008
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Drop Us a Note!</h2>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="feedback">Message:</label>
                <textarea
                    id="notes"
                    name="message"
                    placeholder="Your message here..."
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button innerText="Submit" onClick={handleSubmit} />
            </form>
        </main>
    );
}
