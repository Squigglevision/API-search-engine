import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
	const [inputValue, setInputValue] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		handleSubmit(inputValue);
		console.log("Form submitted", inputValue);
		setInputValue(""); // Empty the search bar
	};

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={formSubmit}>
			<input
				onChange={onInputChange}
				type="text"
				placeholder="search"
				value={inputValue}
			></input>
			<button>Search </button>
		</form>
	);
};

export default SearchBar;
