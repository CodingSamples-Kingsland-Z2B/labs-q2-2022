class PlayingCards{
    #face;
    #suit;
    constructor(face,suit){
        let faces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        let suits = ["S","H","D","C"];
        if( !(faces.includes(face) && suits.includes(suit)) ){
            throw Error("Error");
        }
        this.#face = face;
        this.#suit = suit;
    }

    get face(){
        return this.#face;
    }
    set face(face){
        let faces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        if( !(faces.includes(face)) ){
            throw Error("Error");
        }

        this.#face = face;
    }
    get suit(){
        return this.#suit;
    }
    set suit(suit){
        let suits = ["S","H","D","C"];
        if( !(suits.includes(suit)) ){
            throw Error("Error");
        }

        this.#suit = suit;
    }

    toString(){
        let suits ={
            "S":"\u2660",
            "H":"\u2665",
            "D":"\u2666",
            "C":"\u2663"
        };
        return `${this.#face}${suits[this.#suit]}`;
    }
}

module.exports = PlayingCards;