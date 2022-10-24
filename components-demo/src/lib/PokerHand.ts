import Card from "./Card";

function rightSort(a: number, b: number) {
	return a > b ? 1 : b > a ? -1 : 0;
}

class PokerHand {
	public handSuit = "";
	public handRank = "";
	public value: Card[] = [];

	constructor(cards: Card[]) {
		for (let i = 0; i < 5; i++) {
			this.handSuit += cards[i].suit[0]
			this.handRank += cards[i].rank[0]
			this.value = cards
		}
	}


	getOutcome() {
		let pair = 0;
		let three = 0;
		let four = 0;

		for (let i = 0; i < 5; i++) {
			const prob = this.handRank.split(this.handRank[i]).length - 1;
			if (prob === 2) {
				pair++;
				const newRank = this.handRank.split('');
				newRank.splice(i, 1);
				this.handRank = newRank.join('');
			}
			if (prob === 3) {
				three++;
			}
			if (prob === 4) {
				four++;
			}
		}

		const spades = this.handSuit.match(/s/g) || [];
		const clubs = this.handSuit.match(/c/g) || [];
		const hearts = this.handSuit.match(/h/g) || [];
		const diams = this.handSuit.match(/d/g) || [];
		let rankArray: number[] = [];

		for (let i = 0; i < 5; i++) {
			rankArray.push(this.value[i].getScore() || 0);
			rankArray.sort(rightSort);
		}
		if ((rankArray[0] === rankArray[4] + 4) && (spades.length > 4 || clubs.length > 4 || hearts.length > 4 || diams.length > 4)) {
			if (rankArray[0] === 10) {
				return 'Royal flush';
			} else {
				return 'straight flush';
			}
		} else if (four === 1) {
			return 'four of a kind';
		} else if (three > 0 && pair > 0) {
			return 'full-house'
		} else if (spades.length > 4 || clubs.length > 4 || hearts.length > 4 || diams.length > 4) {
			return 'flush';
		} else if (pair === 0) {
			if (((rankArray[0] === rankArray[3] - 3) && (rankArray[4] === 14 && rankArray[0] === 2)) || (rankArray[0] === rankArray[4] - 4)) {
				return 'straight';
			}
		} else if (three > 0) {
			return 'three of a kind';
		} else if (pair === 2) {
			return 'two pairs';
		} else if (pair === 1) {
			return 'pair';
		}
	}
}

export default PokerHand;