window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(ArrowDown) {
    if (e.keyCode == "40") {
        //Play Music
        document.getElementById('yourAudioTag').play()
    }
}