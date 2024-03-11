function choice1() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let imageNumber1 = "./images/dice-" + randomNumber1 + ".svg";

    document.querySelector(".image1").setAttribute("src", "./images/dice-spin.gif");
    setTimeout(function(){document.querySelector(".image1").setAttribute("src", imageNumber1);}, 1000)
}
function choice2() {

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let imageNumber2 = "./images/dice-" + randomNumber2 + ".svg";

    document.querySelector(".image2").setAttribute("src", "./images/dice-spin.gif");
    setTimeout(function(){document.querySelector(".image2").setAttribute("src", imageNumber2);}, 1000)
}

document.querySelector("#button1").addEventListener("click", choice1);
document.querySelector("#button2").addEventListener("click", choice2);

document.addEventListener("keydown", function(event){
    keyboard(event.key);
});

function keyboard(key) {
    switch (key) {
        case " ":
            choice1();
            break;

        case "Enter":
            choice2();
            break;

        default: break;
    }
}
