import { useState } from "react";
import BookList from "./Components/BookList/BookList";
import BookSearch from "./Components/BookSearch/BookSearch";
import styles from "./App.module.scss";

function App() {
	const [searchTerm, setSearchTerm] = useState(null);

	const handleSubmit = (value) => {
		console.log("Form submitted");
		console.log("value", value);
		setSearchTerm(value);
		console.log(searchTerm, "This is the search Term");
	};

	return (
		<>
			<main className={styles.app}>
				<BookSearch handleSubmit={handleSubmit} />
				<BookList searchTerm={searchTerm} />
				{/* {searchTerm ? <BookSearch searchTerm={searchTerm} /> : <p></p>} */}
			</main>
		</>
	);
}

export default App;
