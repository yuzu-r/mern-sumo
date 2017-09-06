import React from 'react';

const Rikishi = (props) => {
	return (
		<div>
			<p>{props.rikishi.name} ({props.rikishi.kanji})
				<a
					href = '#'
					onClick = {props.onDelete}>Delete
				</a>
			</p>
		</div>
		)
}

export default Rikishi;