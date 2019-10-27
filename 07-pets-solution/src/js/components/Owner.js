import React from 'react';

const Owner = ({name, numPets}) => {
	return (
		<div className="c-owner">
			<h1>{name} has {numPets} pets</h1>
		</div>
	);
}

export default Owner;