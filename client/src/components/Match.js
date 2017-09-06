import React from 'react';

const Match = (props) => {
	return <p>
						Match #{props.match.matchNumber}:&nbsp;
						{props.match.eastId.name} ({props.match.eastId.kanji})
						&nbsp;vs&nbsp;
						{props.match.westId.name} ({props.match.westId.kanji})
					</p>
}

export default Match;