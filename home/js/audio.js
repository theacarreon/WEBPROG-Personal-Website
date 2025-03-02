<script>
let isPlaying = false;
function toggleAudio() {
    let iframe = document.getElementById("youtubeAudio");
    let playBtn = document.getElementById("playBtn");

    if (!isPlaying) {
        iframe.src = "https://www.youtube.com/embed/qeqj5GnoFUY?autoplay=1&controls=0&showinfo=0&modestbranding=1";
        playBtn.textContent = "⏸";
    } 
    else {
        iframe.src = ""; // Stop audio
        playBtn.textContent = "▶";
    }

    isPlaying = !isPlaying;
}
</script>