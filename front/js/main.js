import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sendArray(arraySend){
    console.log(arraySend);
}

function validForm() {
    document.getElementById("sub").style.pointerEvents = "none";
    document.getElementById("sub").style.opacity = ".3";

    // var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    var num_regex = /^[0-9]/i;
    var typeError;

    var array = [0, 1];
    var arraySend = [];
    var er = false;

    for (let i = 0; i < array.length; i++) {
        let j = array[i];
        // console.log(document.forms[0], );
        arraySend.push(document.forms[0][j].value.trim());
    }

    sendArray(arraySend);

    //     if (
    //         !document.forms[0][j].validity.valid ||
    //         !document.forms[0][j].value.trim().length ||
    //         (j === 3 && !email_regex.test(document.forms[0][j].value))
    //     ) {
    //         er = true;
    //         document.forms[0][j].focus();

    //         document.forms[0][j].classList.add("is-invalid");

    //         typeError = document.getElementById("error");

    //         console.log("111", document.forms);

    //         if (j === 3 && !email_regex.test(document.forms[0][j].value) && document.forms[0][j].value.trim().length) {
    //             typeError.innerText = "Не корректный адрес";
    //         } else if (j === 3) {
    //             typeError.innerText = "Укажите почту";
    //         }
    //         if (j === 2) {
    //             typeError.innerText = "Заполните поле Имя и Фамилия";
    //         }
    //         if (j === 0) {
    //             typeError.innerText = "Добавьте свою историю";
    //         }

    //         typeError.style.display = "block";
    //     }
    // }
    // if (!er) {
    //     document.getElementById("error").style.display = "none";
    //     send();
    // }
}

document.addEventListener("DOMContentLoaded", function() {//Аналог $(document).ready(function(){

    document.getElementById("sub").addEventListener('click', function (ev) {
        validForm();
    });

    function rot(ran){
        // $("#img").rotate({ angle: 45 });
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
