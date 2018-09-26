import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", function() {//Аналог $(document).ready(function(){

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
        console.log(getRandom);
        rot(720 + getRandom * 36);
    });


});
