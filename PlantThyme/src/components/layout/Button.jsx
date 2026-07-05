export default function Button({ innerText, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick}>
            {innerText}
        </button>
    );
}
