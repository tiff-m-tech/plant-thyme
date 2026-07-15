import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function Modal({
    icon,
    isOpen,
    onClose,
    onConfirm,
    confirmText,
    cancelText,
    message,
    className1 = "",
    className2 = "",
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <div>
                <FontAwesomeIcon icon={icon} className={className1} />
            </div>
            <div>{message}</div>
            <div className="modal-btns">
                <Button innerText={confirmText} onClick={onConfirm} className={className2} />
                <Button innerText={cancelText} onClick={onClose} />
            </div>
        </div>
    );
}
