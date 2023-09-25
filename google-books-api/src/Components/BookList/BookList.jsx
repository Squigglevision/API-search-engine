import books from "../../books.json";
import BookGrid from "../GridItem/GridItem";
import styles from "./BookList.module.scss";

// Needs image, author, title, description

const BookList = ({ searchTerm }) => {
	let items = books.items;

	const booksArray = items.map((item) => {
		return [
			item.id,
			item.volumeInfo.imageLinks.thumbnail,
			item.volumeInfo.authors,
			item.volumeInfo.title,
			item.volumeInfo.description,
		];
	});

	let filteredBooks = [...booksArray];

	if (searchTerm) {
		filteredBooks = booksArray.filter((book) =>
			book[3].toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	let gridClasses = styles.grid;

	return (
		<>
			<div className={gridClasses}>
				{filteredBooks.map((book) => (
					<BookGrid
						key={book[0]}
						image={book[1] ? book[1] + "&fife=w200-h300" : null}
						imageAlt={book[1] ? "Cover image of " + book[3] : null}
						title={book[3] ? book[3] : null}
						author={book[2] ? book[2] : null}
						description={book[4] ? book[4] : null}
					/>
				))}
			</div>
		</>
	);
};

export default BookList;

// let volumeImage = items.map((item) => {
// 	item.volumeInfo.imageLinks.thumbnail;
// });

// let volumeAuthors = items.map((item) => {
// 	item.volumeInfo.authors;
// });

// let volumeTitle = items.map((item) => {
// 	item.volumeInfo.title;
// });

// let volumeDescription = items.map((item) => {
// 	item.volumeInfo.description;
// });

// let booksArray = items.map((item) => {
// 	return [
// 		item.id,
// 		item.volumeInfo.imageLinks.thumbnail,
// 		item.volumeInfo.authors,
// 		item.volumeInfo.title,
// 		item.volumeInfo.description,
// 	];
// });

// .map(() => (
//     <li key={id}>
//         {console.log(id, "< --id")}
//         <img
//             src={
//                 volumeImages.filter
//                     ? volumeImages[index]
//                     : "... No images found"
//             }
//             alt={"Cover image of " + volumeTitle[index]}
//         />
// <p>
//     {volumeAuthors[index]
//         ? volumeAuthors[index]
//         : "... No authors found"}
// </p>
//         <p>
//             {volumeTitle[index]
//                 ? volumeTitle[index]
//                 : "... No title found"}
//         </p>
//         <p>
//             {volumeDescription[index]
//                 ? volumeDescription[index]
//                 : "... No description found"}
//         </p>
//     </li>
// ))}

// return (
//     <>
//         <ul>
//             {filteredBooks.map((book) => (
//                 <li key={book}>
//                     <img
//                         src={book[1] ? book[1] : "... No images found"}
//                         alt={"Cover image of " + book[3]}
//                     />
//                     <p>{book[2] ? book[2] : "... No authors found"}</p>
//                     <p>{book[3] ? book[3] : "... No title found"}</p>
//                     <p>{book[4] ? book[4] : "... No description found"}</p>
//                 </li>
//             ))}
//         </ul>
//     </>
// );

// // Book id/key:

// const volumeId = items.map((item) => {
// 	return item.id;
// });

// // Image:
// const volumeImages = items
// 	.map((item) => {
// 		return item.volumeInfo;
// 	})
// 	.map((volume) => {
// 		return volume.imageLinks;
// 	})
// 	.map((image) => {
// 		return image.thumbnail;
// 	});

// // Author - one is undefined (so need to handle it):

// const volumeAuthors = items
// 	.map((item) => {
// 		return item.volumeInfo;
// 	})
// 	.map((volume) => {
// 		return volume.authors;
// 	});

// // Title:

// const volumeTitle = items
// 	.map((item) => {
// 		return item.volumeInfo;
// 	})
// 	.map((volume) => {
// 		return volume.title;
// 	});

// // Description:

// const volumeDescription = items
// 	.map((item) => {
// 		return item.volumeInfo;
// 	})
// 	.map((volume) => {
// 		return volume.description;
// 	});

// let booksArray = [[]];

// const mappingBooks = volumeId.map((value, index) => {
// 	// booksArray[index].push([value]);
// 	booksArray[[index]] = [
// 		value,
// 		volumeImages[index],
// 		volumeAuthors[index],
// 		volumeTitle[index],
// 		volumeDescription[index],
// 	];
// });
