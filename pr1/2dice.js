function dice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let imageNumber1 = "./images/dice-" + randomNumber1 + ".svg";

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let imageNumber2 = "./images/dice-" + randomNumber2 + ".svg";

    let message = "It's " + (randomNumber1+randomNumber2) + "!";

    document.querySelector(".image2").setAttribute("src", "./images/dice-spin.gif");
    document.querySelector(".image1").setAttribute("src", "./images/dice-spin.gif");
    setTimeout(function () {
        document.querySelector(".image1").setAttribute("src", imageNumber1);
        document.querySelector(".image2").setAttribute("src", imageNumber2);
        document.querySelector("h1").innerHTML = message;
    }, 1000)

}

document.querySelector("button").addEventListener("click", dice);

document.addEventListener("keydown", function(event){
    keyboard(event.key);
});

function keyboard(key) {
    switch (key) {

        case "Enter":
            dice();
            break;

        default: break;
    }
}