import { useState } from "react";
import BookList from "./Components/BookList/BookList";
import BookSearch from "./Components/BookSearch/BookSearch";
import styles from "./App.module.scss";
import { getBooksBySearchTerm } from "./services/book-service";
import Header from "./Components/Header/Header";

function App() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [items, setItems] = useState([]);
	const [searching, setSearching] = useState(false);
	const [searchStarted, setSearchStarted] = useState(false);

	const fetchBooks = async (searchTerm) => {
		const data = await getBooksBySearchTerm(searchTerm);
		setItems(data.items || []);
		setSearching(false);
	};

	const handleSubmit = (value) => {
		setSearchStarted(true);
		setSearching(true);
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
				<BookList
					searchTerm={searchTerm}
					items={items}
					searching={searching}
					searchStarted={searchStarted}
				/>
			</main>
		</>
	);
}

export default App;
