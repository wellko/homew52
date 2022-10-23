import React from 'react';
import './App.css';
import Card from "./lib/Card";

interface cardProps {
	rank: string;
	suit: string;
}

const CardView: React.FC<cardProps> = props => {
	const classValue = "card rank-" + props.rank.toLowerCase() + " " + props.suit
	let suitChar: string = '';
	switch (props.suit) {
		case "diams":
			suitChar = "♦"
			break;
		case "hearts":
			suitChar = "♥"
			break;
		case "clubs":
			suitChar = "♣"
			break;
		case "spades":
			suitChar = "♠"
			break;
	}
	return (
		<span className={classValue}>
            	<span className="rank">{props.rank}</span>
				<span className="suit">{suitChar}</span>
             </span>)
}

function App() {
	return (
		<div className="App">
			<div className="playingCards faceImages">
				<CardView rank="2" suit="clubs"/>
			</div>
		</div>
	);
}

export default App;
