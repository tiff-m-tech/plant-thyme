import { useState } from "react";
import { altFromFileName } from "../../utils/altFromFileName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHouse, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import PageTitle from "../ui/PageTitle";
import SectionDivider from "../ui/SectionDivider";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function Contact() {
    const contactImagePath = "/images/brand/contact.webp";
    const initialFormData = { name: "", email: "", message: "" };
    const [formData, setFormData] = useState(initialFormData);
    const [submitted, setSubmitted] = useState(false);

    // Copies the previous state (prev), then overwrites just the field that changed ([name]: value)
    // [name] is a computed property name - it uses the input's name attribute as the key.
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault(); // Stops browser from reloading page.

        // NOTE: Later change this to send values to backend in Unit 2.
        console.log("Submitting", formData);
        setFormData(initialFormData);
        setSubmitted(true);
    }

    usePageTitle("Contact");

    return (
        <main id="contact">
            <img
                src={contactImagePath}
                alt={altFromFileName(contactImagePath)}
                className="large-page-image"
            />
            <PageTitle title="Contact" />
            <h2>Dont be a stranger, leaf me a message!</h2>
            <div className="contact-page-summary">
                Have a question, suggestion, or a leafy idea to share? Send it my way. I'd love to
                hear from you!
            </div>
            <div className="contact-info-container">
                <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <strong>Email:</strong> support@plant_thyme.com
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon icon={faPhone} />
                    <strong>Phone:</strong> 610-867-5309
                </div>
                <div className="contact-info">
                    <span className="address-label">
                        <FontAwesomeIcon icon={faHouse} />
                        <strong>Address:</strong>
                    </span>
                    Plant Thyme
                    <br />
                    123 Greenhouse Lane
                    <br />
                    Sproutville, PA 19008
                </div>
            </div>
            <SectionDivider />
            <form onSubmit={handleSubmit}>
                <h2>
                    <FontAwesomeIcon icon={faPenToSquare} /> Drop Us a Note!
                </h2>
                <label htmlFor="name">
                    Name <span className="red-font">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">
                    Email <span className="red-font">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">
                    Message <span className="red-font">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows="4"
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button innerText="Submit" type="submit" className="contact-submit-btn" />
                {submitted && (
                    <p className="confirmation-form-submitted">
                        🥰<strong> Thanks! Your message has been sent. </strong>🌱
                    </p>
                )}
            </form>
        </main>
    );
}
