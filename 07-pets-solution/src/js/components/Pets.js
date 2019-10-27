import React from 'react';

import Pet from './Pet';

const Pets = ({ pets = [] }) => {
	return (
		<>
			<ul className="c-pets">
				{Object.entries(pets).map(([uuid, pet]) => <Pet {...pet} key={uuid} />)}
			</ul>

			{/* @TODO: Add PetForm here … */}
		</>
	)
};

export default Pets;