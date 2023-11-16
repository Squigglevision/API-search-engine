# Google Books API-search-engine

This application fetches the Google Books API and applies a search term to the API URL to return a grid of twenty books that match the term. 
The application uses React and is written in JSX, JavaScript and SCSS.

---

## Requirements / Purpose

The purpose of this project was to put what I had been learning about React and asynchronous programming into practice.
For the MVP, I had to create a React app that would fetch search results from the Google Books API and populate them on the page based on whatever the user inputs into the search bar at the top of the page. For the bonus challenge, I set the application up to give feedback to the user when no books could be found for their search query.

An additional bonus challenge was to create a pop-up modal which contains more information about a book whenever the user clicks the book in the grid. As I was building the application, I thought that this would be cubersome for users, as they would want to quickly glance at the information as they're scrolling and not have to keep closing modals as they pop up. I made the design choice to have the books flip instead to provide a better user experience, which would also give the illusion that the user was looking at the front and back covers of each book.

---

## Build Steps

To run this React application on your local machine, make sure you're in the google-books-api directory in the terminal and run the following commands:

```console
npm install
```

```console
npm run dev
```

You should then see the word Vite and a list of commands in your terminal.
If the application doesn't automatically open in a browser window, you can either:

- Copy the url after "local:" into your browser, or
- type "o" into your terminal and press enter

The application should then start running in your browser window.

---

## Features

This application has the following features: 
-   A search bar which will populate the screen with books when a search term is entered
-   API calls to the Google Books API
-   A gallery of books that flip to review the description and publication details of each book when flipped

---

## Future Goals

In the future I would love to:
-   Create functions inside services that handle more of the data manipulation/cleaning, so that they won't need to be handled at the component level
-   Create pagination and redesign the API calls so that more than 20 books can be fetched from the API, and displayed on each page

## Further details, related projects, reimplementations

-   Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
-   If it's an API, is there a client app that works with this project? link it
