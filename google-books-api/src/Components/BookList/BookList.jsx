import BookGrid from "../GridItem/GridItem";
import styles from "./BookList.module.scss";

const BookList = ({ searchTerm, items, searching, searchStarted }) => {
	const filteredBooks = items.map((item) => {
		return {
			id: item.id,
			image: item.volumeInfo.imageLinks?.thumbnail,
			authors: item.volumeInfo.authors,
			title: item.volumeInfo.title,
			description: item.volumeInfo.description,
			country: item.saleInfo.country,
			publisher: item.volumeInfo.publisher,
			datePublished: item.volumeInfo.publishedDate,
			categories: item.volumeInfo.categories,
			pageCount: item.volumeInfo.pageCount,
		};
	});

	let gridClasses = styles.grid;

	return (
		<>
			{items && items.length > 0 ? (
				<div className={gridClasses}>
					{filteredBooks.map((book) => (
						<BookGrid
							key={book.id}
							image={
								book.image
									? book.image + "&fife=w200-h300"
									: null
							}
							imageAlt={
								book.image
									? "Cover image of " + book.title
									: null
							}
							title={book.title || null}
							author={
								book.authors ? book.authors.join(" & ") : null
							}
							description={book.description || null}
							country={book.country || null}
							publisher={book.publisher || null}
							datePublished={book.datePublished || null}
							categories={
								book.categories
									? book.categories.join(" , ")
									: null
							}
							pageCount={book.pageCount || null}
						/>
					))}
				</div>
			) : (
				<p>
					{!searchStarted
						? `Type a keyword into the searchbar above to search for a book`
						: !searching
						? `There are no search results for ${searchTerm}.`
						: null}
				</p>
			)}
		</>
	);
};

export default BookList;
