function playSong(songName) {

    const player = document.getElementById("now-playing");

    if (player) {
        player.textContent = "▶ Now Playing: " + songName;
    }
}


function showPlaylist() {

    const message =
        document.getElementById("playlist-message");

    if (message) {
        message.textContent =
            "🎵 Your playlist is ready to play!";
    }
}


const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        document.getElementById("result").textContent =
            "Thank you, " + name +
            "! Your message has been sent.";

        contactForm.reset();
    });
}