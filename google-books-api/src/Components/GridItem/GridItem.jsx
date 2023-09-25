import React, { useState } from "react";
import styles from "./GridItem.module.scss";

const BookGrid = ({ image, imageAlt, title, author, description }) => {
	let gridContent = styles.content;

	const [isShown, setIsShown] = useState(false);

	return (
		<article className={gridContent}>
			<div className={styles.content_wrapper}>
				<img src={image} alt={imageAlt}></img>
				<h3>{title}</h3>
				<p>{author ? `By ${author}` : null}</p>
				<button onClick={() => setIsShown(!isShown)}>
					{isShown ? `Hide description` : `Show description`}
				</button>
				{isShown ? <p>{description}</p> : null}
			</div>
		</article>
	);
};

export default BookGrid;
