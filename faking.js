console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

function cardMaker(){
    var randomPic = faker.image.avatar(); 
    document.getElementById("image").src = randomPic;

    var randomName = faker.name.findName();
    document.getElementById("name").innerHTML = randomName;

    var randomEmail = faker.internet.email();
    document.getElementById("email").innerHTML = randomEmail;
}

function congrats(){
    alert("Congrats! Your REAL Imaginary friend will be in touch with you.")
    alert("You can never have to many REAL imaginary friends! Feel free to keep looking.")

    var randomPic = faker.image.avatar(); 
    document.getElementById("image").src = randomPic;

    var randomName = faker.name.findName();
    document.getElementById("name").innerHTML = randomName;

    var randomEmail = faker.internet.email();
    document.getElementById("email").innerHTML = randomEmail;
}