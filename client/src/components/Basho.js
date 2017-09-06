import React from 'react';
import DayContainer from '../containers/DayContainer';
import '../styles/basho.css';


const Basho = (props) => {
	let dayNodes = null;
	if (props.isLoadingMatches && props.matches.length > 0) {
		// sort out into appropriate groups of matches per day
		let sortedMatches = props.sortIntoDays(props.matches);
		console.log(sortedMatches[0]);
		dayNodes = sortedMatches.map((day, index) => {
			return (
				<DayContainer
					day  = {day}
					key = {index}
				/>
			)
		})		
	}
	return (
		<div>
			<button 
				className='accordion'
				onClick={props.onExpand}
			>
				{props.basho.city} ({props.basho.startDate})
			</button>
			<div>
		  	{dayNodes}
			</div>			
		</div>
	)
}




export default Basho;

/*
// if I click button, class "active" has to be added , also the maxHeight of panel
// must change from 0 to not 0 or back to 0.

// Each basho should get a detailed look (where the matches get retrieved)
// The matches should be grouped by days in order (Day 1, Day 2...)
// Each day is unexpanded until clicked upon
// when a day is clicked, it expands or unexpands to show each of its matches (in order)
// Each match shows the east and west plus the winner (if present)
// The wrestlers should be links to the rikishi detail page
// BashoContainer should retrieve match info when it mounts (it might not have any)
// (for now it happens when expanded)
// BashoContainer -> Basho -> DayContainer -> Day -> MatchContainer -> Match

// to sort into days,
// look at each match for its dayNumber
// all the dayNumber 1 should go into a single array of matches
// all the dayNumber 2 should go into a different array of matches
// or a 2-d array? 
// array[day#, match#]
/*

const Basho = (props) => {
	let matchNodes = null;
	if (props.isLoadingMatches && props.matches.length > 0){
		console.log('i have matches');
		matchNodes = props.matches.map(match => {
			return (
				<div key={match['_id']}>
					<p>Day {match.dayNumber}: Match {match.matchNumber}</p>
				</div>
			)
		});
	}
	return (
		<div>
			<button 
				className='accordion'
				onClick={props.onExpand}
			>
				{props.basho.city} ({props.basho.startDate})
			</button>
			<div>
		  	{matchNodes}
			</div>
		</div>
	)
}

*/



