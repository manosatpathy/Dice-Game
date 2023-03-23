let randomNumber = Math.floor(Math.random() * 6) + 1

let randomImage = ("dice"+randomNumber+".png")
let randomDice = ("images/"+randomImage)
let image = document.querySelector(".img1");
image.setAttribute("src",randomDice);


let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImage2 = ("dice"+randomNumber2+".png")
let randomDice2 = ("images/"+randomImage2)
let image2 = document.querySelector(".img2");
image2.setAttribute("src",randomDice2);


if (randomNumber==randomNumber2){
    document.querySelector("h1").textContent = ("Draw!")
}else if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent = ("Player 1 Wins!")

}else{
    document.querySelector("h1").textContent = ("Player 2 Wins!")
}
