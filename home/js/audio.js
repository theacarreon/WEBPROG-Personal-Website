

let isPlaying = false;
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'qeqj5GnoFUY',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': function(event) {
                console.log("YouTube Player Ready!");
            }
        }
    });
}

function toggleAudio() {
    console.log("Toggling audio, player:", player);

    if (!player || typeof player.playVideo !== "function") {
        console.log("Player not ready yet!");
        return;
    }

    let playBtn = document.getElementById("playBtn");

    if (!isPlaying) {
        player.playVideo();
        playBtn.textContent = "⏸"; // Pause icon
    } else {
        player.pauseVideo();
        playBtn.textContent = "▶"; // Play icon
    }

    isPlaying = !isPlaying;
}