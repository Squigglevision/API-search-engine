import { useState } from "react";
import BookList from "./Components/BookList/BookList";
import BookSearch from "./Components/BookSearch/BookSearch";
import styles from "./App.module.scss";
import { getBooksBySearchTerm } from "./services/book-service";
import Header from "./Components/Header/Header";

function App() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [items, setItems] = useState([]);

	const fetchBooks = async (searchTerm) => {
		const data = await getBooksBySearchTerm(searchTerm);
		setItems(data.items || []);
	};

	const handleSubmit = (value) => {
		setSearchTerm(value);
		fetchBooks(value);
	};

	return (
		<>
			<header className={styles.header}>
				<Header />
			</header>
			<main className={styles.app}>
				<BookSearch handleSubmit={handleSubmit} />
				<BookList searchTerm={searchTerm} items={items} />
				{/* {searchTerm ? <BookSearch searchTerm={searchTerm} /> : <p></p>} */}
			</main>
		</>
	);
}

export default App;
