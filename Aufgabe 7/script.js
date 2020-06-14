"use strict";
window.addEventListener("load", function () {
    var sound1 = new Audio("A.mp3");
    var sound2 = new Audio("C.mp3");
    var sound3 = new Audio("F.mp3");
    var sound4 = new Audio("G.mp3");
    var sound5 = new Audio("hihat.mp3");
    var sound6 = new Audio("kick.mp3");
    var sound7 = new Audio("laugh-1.mp3");
    var sound8 = new Audio("laugh-2.mp3");
    var sound9 = new Audio("snare.mp3");
    var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    // tslint:disable-next-line: typedef
    function playSample(sound) {
        sound.play();
    }
    document.querySelector("#Button1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#Button2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#Button3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#Button4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#Button5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#Button6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#Button7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#Button8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#Button9").addEventListener("click", function () { playSample(sounds[8]); });
    var beat = [sound6, sound9, sound5];
    function playBeat1() {
        beat[0].play();
    }
    function playBeat2() {
        beat[1].play();
    }
    function playBeat3() {
        beat[2].play();
    }
    function playBeat() {
        setTimeout(function () { playBeat1(); }, 1);
        setTimeout(function () { playBeat2(); }, 500);
        setTimeout(function () { playBeat3(); }, 1000);
    }
    document.querySelector("#playbtn").addEventListener("click", playBeat);
});
//# sourceMappingURL=script.js.map