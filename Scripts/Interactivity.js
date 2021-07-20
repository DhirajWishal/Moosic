/**
 * A function to set inner html values of a given element randomly. This uses the trueString's size to fill in an equal sized string with random characters until a certain
 * timeout, and then sets the true string in it.
 * 
 * @param {*} element The html element to set the inner html value to.
 * @param {*} trueString The real string to place.
 * @param {*} timeout The timeout in milliseconds.
 */
function cypherText(element, trueString, timeout = 3000) {
    let length = trueString.length;
    let bShouldRun = true;

    setTimeout(() => {
        bShouldRun = false;
    }, timeout);

    let code = setInterval(() => {
        let content = "";

        for (let i = 0; i < length; i++) {
            let number = Math.floor(Math.random() * 93) + 33
            content += String.fromCharCode(number);
        }

        element.innerHTML = content;

        if (bShouldRun == false) {
            element.innerHTML = trueString;
            clearInterval(code);
        }
    }, 10);
}

const audioAssets = [
    "../Assets/Audio/Travis Scott - SICKO MODE (Clean -) ft. Drake.mp3",
    "../Assets/Audio/Future, Drake - Life is Good (Clean -).mp3"
];

// global audio object variable.
var audioObject = new Audio(audioAssets[Math.floor(Math.random() * audioAssets.length)]);
audioObject.volume = 0.2;

/**
 * Play audio if the user wants to.
 */
function playAudio() {
    audioObject.play();
}

/**
 * Pause audio playback.
 */
function pauseAudio() {
    audioObject.pause();
}

/**
 * Increase audio volume.
 */
function increaseAudioVolume() {
    audioObject.volume += 0.1;
}

/**
 * Decrease audio volume.
 */
function decreaseAudioVolume() {
    audioObject.volume -= 0.1;
}