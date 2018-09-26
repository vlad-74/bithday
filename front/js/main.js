import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sendArray(arraySend){
    console.log(arraySend);
    document.getElementById("sub").style.pointerEvents = "none";
    document.getElementById("sub").style.opacity = ".3";
    for (let i = 0; i < 2; i++) {
        document.forms[0][i].value ="";
    }
}

function cleanError() {
    var array = [0, 1];
    if (document.getElementById("error")) {
        document.getElementById("error").style.display = "none";
        for (let i = 0; i < array.length; i++) {
            var j = array[i];
            document.forms[0][j].classList.remove("is-invalid");
        }
    }
}

function validForm() {
    var typeError;

    var array = [0, 1];
    var arraySend = [];
    var er = false;

    for (let i = 0; i < array.length; i++) {
        let j = array[i];
        // console.log(document.forms[0], );
        arraySend.push(document.forms[0][j].value.trim());
    
        if (
            !document.forms[0][j].validity.valid ||
            !document.forms[0][j].value.trim().length 
        ) {
            er = true;
            document.forms[0][j].focus();

            document.forms[0][j].classList.add("is-invalid");

            typeError = document.getElementById("error");

            console.log("111", document.forms);

            if (j === 0) {
                typeError.innerText = "Заполните поле Имя и Фамилия";
            }
            if (j === 1) {
                typeError.innerText = "Добавьте свою историю";
            }

            typeError.style.display = "block";
        }
    }
    if (!er) {
        document.getElementById("error").style.display = "none";
        sendArray(arraySend);
    }
}

document.addEventListener("DOMContentLoaded", function() {//Аналог $(document).ready(function(){

    document.getElementById("name1").addEventListener('keydown', function (ev) {
        cleanError();
    });

    document.getElementById("txt1").addEventListener('keydown', function (ev) {
        cleanError();
    });

    document.getElementById("sub").addEventListener('click', function (ev) {
        validForm();
    });

    function rot(ran){
        $("#baraban").rotate({
          angle: 0,
          animateTo: ran,
          duration: 6000
        });
    }

    $('ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    $(".jquery-background-video").bgVideo({ fadeIn: 1000 });

    document.querySelector('#start').addEventListener('click', function (ev) {
        let getRandom = randomIntFromInterval(1,10);
        rot(720 + getRandom * 36);
    });


});
