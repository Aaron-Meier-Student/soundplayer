const numberOfSounds = 15;

function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * numberOfSounds);
    const audio = new Audio(`./sounds/sound${randomIndex}.mp3`);
    audio.addEventListener("ended", () => {
        audio.src = "";
    });
    audio.play().catch(error => console.error("Audio playback failed:", error));
}

document.addEventListener('click', async () => {
    console.log("Occasional Sounds Started!");
    while (true) {
        playRandomSound();
        await wait(Math.random() * (300 - 5) + 5);
    }
});

playRandomSound(10);