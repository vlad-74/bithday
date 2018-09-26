import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';

var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    'Alias nesciunt aliquam sint aliquid enim quisquam amet, minus ea sed neque perferendis corrupti'
    + 'rspiciatis, doloribus earum incidunt sunt rem vero ducimus fuga quaerat necessitatibus'
    + 'similique facere veritatis excepturi ? Earum odit autem ipsa quos.Architecto voluptatum quia'
    + 'doloremque autem aperiam, modi sed odit! Nobis et voluptate architecto, laudantium quisquam'
;


var comments = [
    { id: 1, fio: 'Иванов Иван Иванович', txt: '111 ' },
    { id: 2, fio: 'Петров Петр Петрович', txt: '222 ' + txt }
];


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

    viewComments();

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

    function viewComments() {
        for (var i = 0; i < comments.length; i++) {
            const element = comments[i];
            addPost(element);
        }
    }

    function addPost(element) {
        var m = document.createElement('div');
        m.className = "comment";
        // m.innerHTML = "\n\t\t<div class='photo'>\n\t\t\t<img onclick=\"fullFoto(event)\" alt=\"\" src=" + (element.img || "") + " >\n        </div>\n\t\t<div class='post-body'>\n\t\t\t<div class=\"full-name\">\n\t\t\t\t<h2>" + (element.fio || "") + " </h2>\n\t\t\t</div>\n\t\t\t<div id = \"" + element.id + "\" class='post-text'>\n\t\t\t" + (element.txt || "") + " \n\t\t\t</div>\n\t\t\t<div class='post-btn'>\n\t\t\t\t<button class=\"btn btn-read\" onclick=\"changeText(event, " + element.id + ")\"></button>\n\t\t\t</div>\n        </div>\n        ";
        
        m.innerHTML = `
        <div class="comment__heder">
            <div class="comment-name">
                елена Петровна
                                </div>
            <div class="comment-data">
                1 октября
            </div>
        </div>
        <div class="comment__comment">
            +++ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quaerat nemo, nesciunt numquam impedit sint maxime
            cumque recusandae quo repellat, quia rem nulla. Nobis, quaerat. Quidem rem molestias sapiente minima expedita cumque
            voluptatem aut, unde architecto voluptas, ad porro. Amet sequi dicta fugit reiciendis temporibus repellendus incidunt
            quas sit labore.
        </div>
        `;
        document.getElementById("comments").appendChild(m);
    }
});


{/* <div class="comment">
    <div class="comment__heder">
        <div class="comment-name">
            елена Петровна
                            </div>
        <div class="comment-data">
            1 октября
                            </div>
    </div>
    <div class="comment__comment">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quaerat nemo, nesciunt numquam impedit sint maxime
        cumque recusandae quo repellat, quia rem nulla. Nobis, quaerat. Quidem rem molestias sapiente minima expedita cumque
        voluptatem aut, unde architecto voluptas, ad porro. Amet sequi dicta fugit reiciendis temporibus repellendus incidunt
        quas sit labore.
    </div>
</div> */}