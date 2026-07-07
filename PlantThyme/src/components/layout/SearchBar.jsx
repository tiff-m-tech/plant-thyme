import Button from "./Button";

export default function SearchBar({ value, onChange, onSearch, placeholder }) {
    return (
        <div>
            <input
                type="search"
                name="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <Button innerText="Search" onClick={onSearch} />
        </div>
    );
}
