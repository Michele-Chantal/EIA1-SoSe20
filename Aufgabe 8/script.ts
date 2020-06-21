window.addEventListener("load", function () {
    
    document.querySelector("#Button1").addEventListener("click", function () { playsample("A.mp3"); });
    document.querySelector("#Button2").addEventListener("click", function () { playsample("C.mp3"); });
    document.querySelector("#Button3").addEventListener("click", function () { playsample("F.mp3"); });
    document.querySelector("#Button4").addEventListener("click", function () { playsample("G.mp3"); });
    document.querySelector("#Button5").addEventListener("click", function () { playsample("hihat.mp3"); });
    document.querySelector("#Button6").addEventListener("click", function () { playsample("kick.mp3"); });
    document.querySelector("#Button7").addEventListener("click", function () { playsample("laugh-1.mp3"); });
    document.querySelector("#Button8").addEventListener("click", function () { playsample("laugh-2.mp3"); });
    document.querySelector("#Button9").addEventListener("click", function () { playsample("snare.mp3"); });
    document.querySelector("#playb").addEventListener("click", playorstop);
    document.querySelector("#deleteb").addEventListener("click", deletebeat);
    document.querySelector("#recordb").addEventListener("click", recordBeat);
    
    

    let beatInt: number = undefined;

    let beat: string[] = ["kick.mp3", "snare.mp3", "hihat.mp3"];

    let record: boolean = false;

    function recordBeat(): void {
        if (record) {
            record = false;
        }
        else {
            record = true;
        }
    }

    function playsample(audios: string): void {
        if (record) {
            beat.push(audios);
        }
        const sound: HTMLAudioElement = new Audio(audios);
        sound.play();
    }

    function playorstop(): void {
        let playstopb = document.querySelector("#playb");
    
        if (playstopb.className == "fas fa-play") {
            playstopb.className = "fas fa-stop";
            playbeat();
        } else {
            playstopb.className = "fas fa-play";
            clearInterval(beatInt);
        }
    }

    function deletebeat() {
        beat = [];
    }
    
    function playbeat() {
        var index: number = 0;
        beatInt = setInterval(function () {
            playsample(beat[index]);
            index += 1;
            if (index >= beat.length) {
                index = 0;
            }
        }, 600);
    }

});