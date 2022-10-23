class Card {
constructor(public suit:string, public rank:string) {
}
	getScore() {
		if (isNaN(parseInt(this.rank))){
			if (this.rank === "K" || this.rank === "Q" || this.rank === "J")
				return 10;
		}
		if (this.rank === "A") {
			return 11;
		} else{
			return parseInt(this.rank);
		}
	}

}
export default Card