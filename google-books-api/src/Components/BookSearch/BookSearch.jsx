import { useState } from "react";
import styles from "./BookSearch.module.scss";

const BookSearch = ({ handleSubmit }) => {
	const [inputValue, setInputValue] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		handleSubmit(inputValue);
		setInputValue("");
	};

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={formSubmit} className={styles.form} id="search">
			<input
				className={styles.input}
				onChange={onInputChange}
				type="text"
				placeholder="search"
				value={inputValue}
				id="searchInput"
			></input>
			<button className={styles.btn}>Search </button>
		</form>
	);
};

export default BookSearch;
