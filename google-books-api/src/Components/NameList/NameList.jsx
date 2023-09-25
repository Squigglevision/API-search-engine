import names from "../../names.json";

const NameList = ({ searchTerm }) => {
	let filteredNames = names;
	if (searchTerm) {
		filteredNames = names.filter((name) =>
			name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	return (
		<ul>
			{filteredNames.map((name) => (
				<li key={name}>{name} </li>
			))}
		</ul>
	);
};

export default NameList;
