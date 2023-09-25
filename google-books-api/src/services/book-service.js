export const getBooksBySearchTerm = async (searchTerm = "") => {
	const apiKey = `AIzaSyCM1K8mQxUGLkdIuoIctGAor-1PllNDMf0`;
	if (searchTerm === "") {
		throw new Error("Search must have a value");
	}
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20&key=${apiKey}`,
		{
			headers: {
				Accept: "application/json",
			},
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch books");
	}
	const data = await response.json();

	// if (!data.items) {
	// 	throw new Error(
	// 		"There were no books found for " +
	// 			searchTerm +
	// 			" please try searching with another keyword."
	// 	);
	// }
	// // console.log(data.items.length, " data.items.length");
	return data;
};
