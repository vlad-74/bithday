import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';

var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    'Alias nesciunt aliquam sint aliquid enim quisquam amet, minus ea sed neque perferendis corrupti'
    + 'rspiciatis, doloribus earum incidunt sunt rem vero ducimus fuga quaerat necessitatibus'
    + 'similique facere veritatis excepturi ? Earum odit autem ipsa quos.Architecto voluptatum quia'
    + 'doloremque autem aperiam, modi sed odit! Nobis et voluptate architecto, laudantium quisquam'
;

var blockStart = false;

var comments = [
    { id: 1, fio: 'Иванов Иван Иванович', txt: '111 ', dt: '1 октября' },
    { id: 2, fio: 'Петров Петр Петрович', txt: '222 ' + txt, dt: '1 октября' }
];

function checkUser(){
    if (blockStart) {
        blockButton('start');
    }
};


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function blockButton(id) {
    document.getElementById(id).style.pointerEvents = "none";
    document.getElementById(id).style.opacity = ".3";
}

function rotateBaraban(ran) {

  const duration = 6000;
  $("#baraban").rotate({
    angle: 0,
    animateTo: ran,
    duration: duration
  });

  setTimeout(() => {
      openForm(ran)
      document.getElementById("frm2-wrap").style.display = "block";
  }, duration + 500);
}

function openForm(item){
    item = (item - 720) / 36;
    if (item > 5) {
        item = item - 5;
    }

    if (item === 1){
        document.getElementById("frm2-txt").innerHTML = "Вы выйграли: Доступ к программе Главбух! Куда Вам его отправить?";
    } else if (item === 2) {
        document.getElementById("frm2-txt").innerHTML = "Вы выйграли: Электронная книжка! Куда Вам его отправить?";
    } else if (item === 3) {
        document.getElementById("frm2-txt").innerHTML = "Вы выйграли: Сертификат Летуаль! Куда Вам его отправить?";
    } else if (item === 4) {
        document.getElementById("frm2-txt").innerHTML = "Вы выйграли: Подарок от журнала! Куда Вам его отправить?";
    } else if (item === 5) {
        document.getElementById("frm2-txt").innerHTML = "Вы выйграли: Шампанское! Куда Вам его отправить?";
    } 

    document.getElementById("frm2-wrap").style.display = "block";
}

function viewComments() {
    for (var i = 0; i < comments.length; i++) {
        const element = comments[i];
        addPost(element);
    }
}

function addPost(element) {
    var m = document.createElement('div');
    m.id = element.dt;
    m.className = "comment";
    m.innerHTML = `
        <div class="comment__heder">
            <div class="comment-name">
                ` + element.fio + `
            </div>
            <div class="comment-data">
                ` + element.dt + `
            </div>
        </div>
        <div class="comment__comment">
             ` + element.txt + `
        </div>
        `;
    document.getElementById("comments").appendChild(m);
}

function sendArray(arraySend, sub, item, length){
    console.log(arraySend);

    blockButton(sub);

    for (let i = 0; i < length; i++) {
        document.forms[item][i].value = "";
    }
}

function cleanError(ev) {

    let idError = ev.target.form.className === 'form' ? "error" : "error2";
    let array = ev.target.form.className === 'form' ? [0, 1] : [0, 1, 2];
    let idForm = ev.target.form.className === "form" ? 0 : 1;

    if (document.getElementById(idError)) {
        document.getElementById(idError).style.display = "none";
        for (let i = 0; i < array.length; i++) {
            var j = array[i];
            document.forms[idForm][j].classList.remove("is-invalid");
        }
    }
}

function validForm(item) {
    let typeError;

    let array = item === 0 ? [0, 1] : [0, 1, 2];
    let idError = item === 0 ? "error" : "error2";
    let sub = item === 0 ? "sub" : "sub2";
    let arraySend = [];
    let er = false;

    for (let i = 0; i < array.length; i++) {
        let j = array[i];
        arraySend.push(document.forms[item][j].value.trim());

        if (
            !document.forms[item][j].validity.valid ||
            !document.forms[item][j].value.trim().length
        ) {
            er = true;
            document.forms[item][j].focus();

            document.forms[item][j].classList.add("is-invalid");

            typeError = document.getElementById(idError);

            if (j === 0) {
                typeError.innerText = "Заполните поле Имя и Фамилия";
            }
            if (j === 1) {
                typeError.innerText = item === 0 ? "Добавьте свою историю" : "Добавьте свой email";
            }
            if (j === 2) {
                typeError.innerText = "Добавьте телефон";
            }

            typeError.style.display = "block";
        }
    }
    if (!er) {
        document.getElementById(idError).style.display = "none";
        sendArray(arraySend, sub, item, array.length);

        if (item === 1) {
          document.getElementById("frm2-wrap").style.display = "none";
        }
        
    }
}

document.addEventListener("DOMContentLoaded", function() {//Аналог $(document).ready(function(){

    onPlayerReady();
    viewComments();

    checkUser();

    var currContent = '';
    var currNum = 0;

    const arrContent = [
        { currNum: 0, content: "c1" },
        { currNum: 1, content: "c2" },
        { currNum: 2, content: "c3" },
        { currNum: 3, content: "c4" },
        { currNum: 4, content: "c5" },
        { currNum: 5, content: "c6" },
        { currNum: 6, content: "c7" },
    ];

    var startPosition = 0;
    function getPosition(id){
        var element = document.getElementById(id);
        return element.getBoundingClientRect().top + window.scrollY;
    }

    function getPositions(){
        const arrCont = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];
        for (let i = 0; i < arrCont.length; i++) {
            let heightElement = getPosition(arrCont[i]);
            let arrDiv = [startPosition, heightElement, arrCont[i]];

            if (window.scrollY > arrDiv[0] && window.scrollY < arrDiv[1]) {
                currContent = "#" + arrCont[i];
                currNum = arrContent.find(item => item.content === arrCont[i]).currNum;
                // console.log(window.scrollY, currContent, arrDiv);
                changeActiveMenu();
            }
            changeActiveMenu();

            startPosition = heightElement + 0.000001;
        }
    }
    getPositions();

    var currMovi = "9prl82wE9xo";

    document.getElementById("movi-big0").addEventListener("click", function (ev) {
        // document.getElementsByTagName("iframe")[0].src += "?autoplay=1";
        document.getElementById("movi-big0").style.display = "none";
        onYouTubePlayerAPIReady2(currMovi);
    });

    document.getElementById("movi-big1").addEventListener("click", function(ev) {
        currMovi = "9prl82wE9xo";
        if(player2) {player2.destroy();}
        // document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/9prl82wE9xo";
        document.getElementById("movi-big0").style.backgroundImage = "url('./dist/img/youtube/screen1_icon.png')";
        document.getElementById("movi-big0").style.display = "block";
    });
    document.getElementById("movi-big2").addEventListener("click", function (ev) {
        currMovi = "a5uck7vTp2E";
        if(player2) {player2.destroy();}
        // document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/a5uck7vTp2E"
        document.getElementById("movi-big0").style.backgroundImage = "url('./dist/img/youtube/screen2_icon.png')";
        document.getElementById("movi-big0").style.display = "block";
    });
    document.getElementById("movi-big3").addEventListener("click", function (ev) {
        currMovi = "5m_Hj3eVQiE";
        if(player2) {player2.destroy();}
        document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/5m_Hj3eVQiE";
        document.getElementById("movi-big0").style.backgroundImage = "url('./dist/img/youtube/screen3_icon.png')";
        document.getElementById("movi-big0").style.display = "block";
    });


    for (let i = 0; i < document.getElementsByClassName("error-clean").length; i++) {
        document.getElementsByClassName("error-clean")[i].addEventListener("keydown", function (ev) {
            cleanError(ev);
        });
    }


    function gotoContent(id) {
        if (id === 1) {
            currNum = 1;
        } else if (id === 2) {
            currNum = 3;
        } else if (id === 3) {
            currNum = 5;
        } else if (id === 4) {
            currNum = 6;
        }
        
        setTimeout(() => {
            if (id !== 4) {
                window.scrollTo(0, document.documentElement.scrollTop - 137);
            }
        }, 0);
    }

    for (let i = 0; i < document.getElementsByClassName("menu").length; i++) {
        document.getElementsByClassName("menu")[i].addEventListener("click", function (ev) {
            gotoContent(i+1);
        });
    }

    function changeActiveMenu(){
        for (let i = 0; i < document.getElementsByClassName("menu").length; i++) {
            let el = document.getElementsByClassName("menu")[i];
            el.classList.remove("active");
            if (currContent === el.getAttribute("href")){
                document.getElementsByClassName("menu")[i].classList.add("active");
            }
        }
    }

    function gotoContentWheel(content){
        
        if (currContent !== content){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(content).offset().top - 137
            }, 300);
            currContent = content;
            console.log("content", content);
            changeActiveMenu();
        }
    }

    

    function logicContentWheel(bool){
        if (bool){
            if (currNum < 5) { currNum = currNum + 1; }
            gotoContentWheel('#' + arrContent.find(item => item.currNum === currNum).content);
        } else {
            if (currNum > 0) { currNum = currNum - 1; }
            gotoContentWheel('#' + arrContent.find(item => item.currNum === currNum).content);  
        }
    }

    function onWheel(ev){
        let e = e || window.event;
        let delta = e.deltaY || e.detail || e.wheelDelta;

        if (delta > 0) {
            logicContentWheel(true);
        } else {
            logicContentWheel(false);
        }
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
    
    for (let i = 0; i < document.getElementsByClassName("mousewheel").length; i++) {
        document.getElementsByClassName("mousewheel")[i].addEventListener("wheel", function (ev) {
            onWheel(ev);
        });
    }

    document.getElementById("sub").addEventListener('click', function (ev) {
        validForm(0);
    });

    document.getElementById("sub2").addEventListener('click', function (ev) {
        validForm(1);
    });

    document.getElementById("exit").addEventListener("click", function(ev) {
        document.getElementById("frm2-wrap").style.display = "none";
    });
    

    $('ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    $(".jquery-background-video").bgVideo({ fadeIn: 1000 });

    document.querySelector('#start').addEventListener('click', function (ev) {
        let getRandom = randomIntFromInterval(1,10);
        rotateBaraban(720 + getRandom * 36);
        blockButton('start');
    });


    var player2;
    function onYouTubePlayerAPIReady2(currMovi) {
        player2 = new YT.Player('iframe-video', {
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'autohide': 1,
                'wmode': 'opaque',
                'showinfo': 0,
                'loop': 0,
                'mute': 0,
            },
            videoId: currMovi,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
    }

    function onPlayerReady(event) {
        // if (event){player.mute();}
    }

    function onPlayerStateChange(event) {
        switch (event.data) {
            case YT.PlayerState.UNSTARTED:
                console.log('unstarted');
                break;
            case YT.PlayerState.ENDED:
                document.getElementById("movi-big0").style.display = "block";
                player2.destroy();
                console.log('ended');
                break;
            case YT.PlayerState.PLAYING:
                console.log('playing');
                break;
            case YT.PlayerState.PAUSED:
                console.log('paused');
                break;
            case YT.PlayerState.BUFFERING:
                console.log('buffering');
                break;
            case YT.PlayerState.CUED:
                console.log('video cued');
                break;
        }
    }


});

