function dice() {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let imageNumber = "./images/dice-" + randomNumber + ".svg";
    let message = "It's " + randomNumber + "!";

    document.querySelector(".image").setAttribute("src", "./images/dice-spin.gif");
    setTimeout(function(){document.querySelector(".image").setAttribute("src", imageNumber);document.querySelector("h1").innerHTML = message;}, 1000)

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