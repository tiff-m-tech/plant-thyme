import { altFromFileName } from "../../utils/altFromFileName";
import { userName, leftDecoImagePath, rightDecoImagePath } from "../../data/constants";

export default function Contact() {
    const contactImagePath = "/images/brand/contact.png";
    return (
        <main id="contact">
            <img src={contactImagePath} alt={altFromFileName(contactImagePath)} className="large-page-image" />
            <div className="page-title-row">
                <img src={leftDecoImagePath} alt={altFromFileName(leftDecoImagePath)} className="end-deco-image" />
                <h1 className="title">Contact</h1>
                <img src={rightDecoImagePath} alt={altFromFileName(rightDecoImagePath)} className="end-deco-image" />
            </div>
            <h2>Questions or Feedback?</h2>
            <p>Feel free to reach out with any questions or suggestions you have! I'd love to hear from you.</p>
        </main>
    );
}
