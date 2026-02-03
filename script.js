const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const img = document.getElementById('displayImg');
const heading = document.getElementById('heading');
const music = document.getElementById('vibeMusic');
const bodyBg = document.getElementById('bodyBg');
const btnGroup = document.getElementById('btnGroup');
const loader = document.getElementById('loader');

// 1. Hide Loader after 2 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 2000);
});

// 2. Dodge Logic for No Button
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.max(15, Math.floor(Math.random() * (maxX - 15)));
    const randomY = Math.max(15, Math.floor(Math.random() * (maxY - 15)));
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });

// 3. Yes Button Logic (The Big Surprise)
yesBtn.addEventListener('click', () => {
    music.play().catch(err => console.log("Play blocked"));

    // Final GIF swap
    img.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";

    // Change background to white to blend with GIF outline
    bodyBg.style.background = "white";
    heading.style.color = "#ff4d6d";
    heading.innerText = "Yay! I love you Vivian! ❤️";

    // Cleanup UI
    btnGroup.style.display = 'none';
    noBtn.style.display = 'none';

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
