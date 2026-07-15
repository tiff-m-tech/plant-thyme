// tutorial https://medium.com/@SaimRizvi/beginners-guide-to-building-a-modal-with-react-5ba05b218214

import Button from "./Button";

export default function Modal({
    isOpen,
    onClose,
    onConfirm,
    confirmText,
    cancelText,
    message,
    className = "",
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <div>{message}</div>
            <div className="modal-btns">
                <Button innerText={confirmText} onClick={onConfirm} className={className} />
                <Button innerText={cancelText} onClick={onClose} />
            </div>
        </div>
    );
}
