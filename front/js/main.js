import * as data from "./data";
import "../style/main.scss";
import _ from 'lodash';


document.addEventListener("DOMContentLoaded", function() {//Аналог $(document).ready(function(){
    var aliceTumbling = [
        { transform: 'rotate(0)', color: '#000' },
        { color: '#431236', offset: 0.3 },
        { transform: 'rotate(360deg) ', color: '#000' }
    ];
    var aliceTiming = {
        duration: 3000,
        iterations: Infinity
    }

    function rot(){
        document.getElementById("baraban").animate(
            aliceTumbling,
            aliceTiming
        )
    }
    $('ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    $("#myBlock").vide("./dist/fun.mp4");

    document.querySelector('#start').addEventListener('click', function (ev) {
        rot();
    });


});
