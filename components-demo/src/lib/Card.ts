class Card {
constructor(public suit:string, public rank:string) {
}
	getScore() {
		if (isNaN(parseInt(this.rank))){
			switch (this.rank){
				case "J":
					return 11;
				case "Q":
					return 12;
				case "K":
					return 13;
				case "A":
					return 14;
			}
		} else{
			return parseInt(this.rank);
		}
	}

}
export default Card