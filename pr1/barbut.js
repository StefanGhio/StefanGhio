
    function dice1() {

        let randomNumber1 = Math.floor(Math.random() * 6) + 1;

        let imageNumber1 = "./images/dice-" + randomNumber1 + ".svg";

        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        let imageNumber2 = "./images/dice-" + randomNumber2 + ".svg";

        let sum1 = randomNumber1 + randomNumber2;

        let message1 = "It's " + sum1 + "!";


        document.querySelector(".image1").setAttribute("src", "./images/dice-spin.gif");
        document.querySelector(".image2").setAttribute("src", "./images/dice-spin.gif");
        setTimeout(function () {
            document.querySelector(".image1").setAttribute("src", imageNumber1);
            document.querySelector(".image2").setAttribute("src", imageNumber2);
            document.querySelector("#change1").innerHTML = message1;
        }, 1000)

        return sum1;

    }


    function dice2() {

        let randomNumber3 = Math.floor(Math.random() * 6) + 1;

        let imageNumber3 = "./images/dice-" + randomNumber3 + ".svg";

        let randomNumber4 = Math.floor(Math.random() * 6) + 1;

        let imageNumber4 = "./images/dice-" + randomNumber4 + ".svg";

        let sum2 = randomNumber3 + randomNumber4;

        let message2 = "It's " + sum2 + "!";

        document.querySelector(".image3").setAttribute("src", "./images/dice-spin.gif");
        document.querySelector(".image4").setAttribute("src", "./images/dice-spin.gif");
        setTimeout(function () {
            document.querySelector(".image3").setAttribute("src", imageNumber3);
            document.querySelector(".image4").setAttribute("src", imageNumber4);
            document.querySelector("#change2").innerHTML = message2;
        }, 1000)

        return sum2;

    }

    function title(sum1, sum2) {

        if (sum1 > sum2) {
            document.querySelector("h1").innerHTML = "Player 1 wins!"
        } else if (sum2 > sum1) {
            document.querySelector("h1").innerHTML = "Player 2 wins!"
        } else {
            document.querySelector("h1").innerHTML = "Tie!"
        }

    }

    function titleChange () {
        let sum1 =  parseInt(document.querySelector("#change1").textContent.match(/\d+/)[0]);
        let sum2 =  parseInt(document.querySelector("#change2").textContent.match(/\d+/)[0])
        return title(sum1, sum2);
    }


    document.querySelector("#button1").addEventListener("click", dice1);
    document.querySelector("#button2").addEventListener("click", dice2);
    document.querySelector("#button3").addEventListener("click", titleChange);

    document.addEventListener("keydown", function (event) {
        keyboard(event.key);
    })

    function keyboard(key) {
        switch (key) {
            case "Shift":
                dice1();
                break;

            case "Enter":
                dice2();
                break;

            case " ":
                titleChange();
                break;

            default:
                break;
        }
    }