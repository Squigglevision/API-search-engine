import { useState } from "react";
import styles from "./GridItem.module.scss";

const BookGrid = ({
	image,
	imageAlt,
	title,
	author,
	description,
	country,
	publisher,
	datePublished,
	categories,
	pageCount,
}) => {
	let gridContent = styles.content;

	const [contentShown, setContentShown] = useState(true);
	const [isClicked, setIsClicked] = useState(false);
	// const handleHover = () => {
	// 	console.log("mouse over");
	// };

	return (
		<article
			className={gridContent}
			onClick={() => {
				setContentShown(!contentShown);
				setIsClicked(!isClicked);
			}}
			style={isClicked ? { border: "2px solid rgb(30,129,176)" } : null}
		>
			<div className={styles.content_wrapper}>
				{contentShown && <img src={image} alt={imageAlt}></img>}
				{contentShown && <h3>{title}</h3>}
				{contentShown && <p>{author ? `By ${author}` : null}</p>}
				{!contentShown && (
					<div>
						<h3>More information:</h3>
						{description && (
							<div className={styles.description}>
								<p>Description:</p>

								<span>{description}</span>
							</div>
						)}

						{categories && <p>Categories: {categories}</p>}
						{pageCount && <p>Number of pages: {pageCount}</p>}
						{country && <p>Available in {country}</p>}
						{publisher && <p>Published by {publisher}</p>}
						{datePublished && <p>Published on {datePublished}</p>}
					</div>

					// country - saleInfo.country (saleInfo same level as volumeInfo)
					// publisher - volumeInfo.publisher
					// published date - volumeInfo.publishedDate
					// Categories - volumeInfo.categories (will be array)
					// pageCount - volumeInfo.pageCount
				)}
			</div>
		</article>
	);
};

export default BookGrid;
