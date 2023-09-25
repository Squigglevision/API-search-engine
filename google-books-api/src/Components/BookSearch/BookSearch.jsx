import { useState } from "react";
import styles from "./BookSearch.module.scss";

const BookSearch = ({ handleSubmit }) => {
	const [inputValue, setInputValue] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		handleSubmit(inputValue);
		console.log("Form submitted", inputValue);
		setInputValue(""); // Empty the search bar
	};

	const onInputChange = (e) => {
		setInputValue(e.target.value);
		console.log(e.target.value);
	};

	return (
		<form onSubmit={formSubmit} className={styles.form}>
			<input
				className={styles.input}
				onChange={onInputChange}
				type="text"
				placeholder="search"
				value={inputValue}
			></input>
			<button className={styles.btn}>Search </button>
		</form>
	);
};

export default BookSearch;
