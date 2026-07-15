// tutorial https://medium.com/@SaimRizvi/beginners-guide-to-building-a-modal-with-react-5ba05b218214

import Button from "./Button";

export default function Modal({ isOpen, onClose, onConfirm, confirmText, cancelText, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <h1>{message}</h1>
            <div className="modal-btns">
                <Button innerText={confirmText} onClick={onConfirm} />
                <Button innerText={cancelText} onClick={onClose} />
            </div>
        </div>
    );
}
