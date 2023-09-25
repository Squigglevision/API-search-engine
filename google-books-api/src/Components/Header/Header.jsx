import styles from "./Header.module.scss";

const Header = () => {
	return (
		<>
			<h1>Google Books API Search Engine</h1>
			<p className={styles.subheading}>
				Use the search bar below to search for a book from the Google
				Books API. Click on a book to see more information and read its
				description.
			</p>
		</>
	);
};

export default Header;
