export const getBooksBySearchTerm = async (searchTerm = "") => {
	const apiKey = `AIzaSyCM1K8mQxUGLkdIuoIctGAor-1PllNDMf0`;

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

	return data;
};
