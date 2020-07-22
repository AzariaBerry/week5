//title, author, genre, short description, price, seller, buyNow -method

var artOfwar = {
    title: "Art of War",
    genre: "Treatise, Non-fiction",
    description: "The Art of War is an ancient chinese military treatise dating from the Late spring and Autumn period. This book comprises of 13 chapters, which contribute to the teaching of Sun Tzu's ancient chinese military strategist.",
    price: "$15.99",
    seller: "Barnes and Nobles",
    //methods (they do something)
    buyNow: function(){
        return this.price + " " + this.seller;
    },
    learnMore: function(){
    return this.title + " , " + this.genre + " , " + this.description;
    }
}

console.log(artOfwar.buyNow())
console.log(artOfwar.learnMore());