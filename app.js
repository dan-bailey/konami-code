// set variables
let keyCount = 0;
const konamiCode = ["Filler", "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA", "Enter"];


window.addEventListener('keyup', function(e) {
    keyCount++;
    if (e.code != konamiCode[keyCount]) {
        // pattern mismatch, reset the count
        keyCount = 0;
    } else {
        if (keyCount == 11) {
            // full Konami Code entered!
            // change the next line of code to do whatever it is you want to trigger
            console.log("KONAMI!");

            // leave this so the trigger can be hit multiple times
            keyCount = 0;
        }
    }
})