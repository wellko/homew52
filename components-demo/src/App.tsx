import './App.css';
import cardDeck from "./lib/CardDeck";
import React, {useState} from 'react';
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";


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

function App () {
	const [cards, setCards] = useState<Card[]>([]);
	const [combination, setCombination] = useState<string>('')
	const getCards = () => {
		 const CardsDeck = new cardDeck()
		const result = CardsDeck.getCards(5);
		setCards(result);
		const Hand = new PokerHand(result)
		setCombination(Hand.getOutcome() || '');
	}


	if (cards.length > 0){
		return (
			<div className="App">
				<div className="playingCards faceImages">
					<CardView rank={cards[0].rank} suit={cards[0].suit}/>
					<CardView rank={cards[1].rank} suit={cards[1].suit}/>
					<CardView rank={cards[2].rank} suit={cards[2].suit}/>
					<CardView rank={cards[3].rank} suit={cards[3].suit}/>
					<CardView rank={cards[4].rank} suit={cards[4].suit}/>
				</div>

				<div className="combination">
					<span>{combination}</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="App">
				<button onClick={getCards}>Take cards</button>
			</div>
		);
	}


}

export default App;
