import Card from "./Card";


class CardDeck{
	Desc: Card[]= [];
	constructor() {
		let suit = "";
		let rank = "";
		for (let i = 0; i < 4; i++){
			switch (i){
				case(0):
					suit = 'clubs'
					break;
				case(1):
					suit = 'diams'
					break;
				case(2):
					suit = 'spades'
					break;
				case(3):
					suit = 'hearts'
					break;
			}
			for (let i = 0; i < 13; i++){
				if (i <= 8){
					rank = (i+2).toString()
				}
				switch (i){
					case (9):
						rank = "J";
						break;
					case (10):
						rank = "Q";
						break;
					case (11):
						rank = "K";
						break;
					case (12):
						rank = "A";

				}
				const CardInDesc = new Card(suit, rank);
				this.Desc.push(CardInDesc);
			}
		}
	}
	getCard():Card {
		const random = Math.floor(Math.random() * (this.Desc.length))
		console.log(random)
		 const deleted:Card[] = this.Desc.splice(random, 1);
		console.log(this.Desc)
		return deleted[0]
	}
	getCards(howMany: number) {
		let result:Card[] = [];
		for (let i = 0; i < howMany; i++){
			const deleted = this.getCard();
			result.push(deleted);
		}
		return result;
	}

}

export default CardDeck