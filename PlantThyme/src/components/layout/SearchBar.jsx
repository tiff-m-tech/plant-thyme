import Button from "./Button";

export default function SearchBar({ value, onChange, onSearch, placeholder, showButton = true }) {
    return (
        <div>
            <input
                type="search"
                name="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {showButton && <Button innerText="Search" onClick={onSearch} />}
        </div>
    );
}
