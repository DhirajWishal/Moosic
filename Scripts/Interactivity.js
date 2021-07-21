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
var audioAsset = audioAssets[Math.floor(Math.random() * audioAssets.length)];
var audioObject = new Audio(audioAsset);
audioObject.volume = 0;
var isPlaying = false;

/**
 * Increase audio volume.
 */
function increaseAudioVolume() {
    audioObject.volume += 0.01;
}

/**
 * Decrease audio volume.
 */
function decreaseAudioVolume() {
    audioObject.volume -= 0.01;
}

/**
 * Fade audio volume out.
 */
function audioFadeOut() {
    let code = setInterval(() => {
        if (audioObject.volume <= 0.01) {
            audioObject.volume = 0;
            clearInterval(code);
        } else
            decreaseAudioVolume()
    }, 200);
}

/**
 * Fade audio volume in.
 * 
 * @param {*} maxVolume The maximum audio volume. Default is 5%;
 */
function audioFadeIn(maxVolume = 0.05) {
    let code = setInterval(() => {
        if (audioObject.volume >= maxVolume)
            clearInterval(code);

        increaseAudioVolume()
    }, 200);
}

/**
 * Setup audio object callbacks.
 */
function setupCallbacks() {
    // In the case of audio finishes playing, it will load another file at random.
    audioObject.onended = () => {
        audioFadeOut();

        audioAsset = audioAssets[Math.floor(Math.random() * audioAssets.length)];
        sessionStorage.setItem("audioAsset", audioAsset);

        audioObject = new Audio(audioAsset);
        audioObject.volume = 0;
        setupCallbacks();

        audioObject.play();
        audioFadeIn();
    }
}

/**
 * Play audio if the user wants to.
 */
function playAudio() {
    if (sessionStorage.getItem("audioPlayback") == 1 && !isPlaying) {
        audioObject = new Audio(sessionStorage.getItem("audioAsset"));
        audioObject.currentTime = sessionStorage.getItem("audioCurrentTime");
        audioObject.volume = 0;

        setupCallbacks();
    }

    audioObject.play();
    audioFadeIn();

    sessionStorage.setItem("audioPlayback", 1);
    sessionStorage.setItem("audioCurrentTime", audioObject.currentTime);
    sessionStorage.setItem("audioAsset", audioAsset);
    isPlaying = true;
}

/**
 * Pause audio playback.
 */
function pauseAudio() {
    audioFadeOut();
    audioObject.pause();

    sessionStorage.setItem("audioPlayback", 0);
    isPlaying = false;
}

// Play audio when the user interacts with the page IF an audio file was playing in the background.
document.onclick = () => {
    if (sessionStorage.getItem("audioPlayback") == 1 && !isPlaying) {
        audioObject = new Audio(sessionStorage.getItem("audioAsset"));
        audioObject.currentTime = sessionStorage.getItem("audioCurrentTime");
        audioObject.volume = 0;
        setupCallbacks();

        audioObject.play();
        audioFadeIn();

        isPlaying = true;
    }
}

// Before the window loads the next page, pause audio and record the current time.
window.onbeforeunload = () => {
    audioFadeOut();
    audioObject.pause();

    sessionStorage.setItem("audioCurrentTime", audioObject.currentTime);
}