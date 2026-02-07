
document.body.classList.add('no-scroll');

const welcomePopup = document.getElementById('welcomePopup');
const continueBtn = document.getElementById('continueBtn');

continueBtn.addEventListener('click', function() {
    welcomePopup.classList.add('hidden');
});


const starsContainer = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

const loveReasons = [
    "Your Art of understanding me without words",
    "The way you light up my world with your smile",
    "Your thought and morals which i admire the most",
    "You understand me like no one else",
    "Your natural behavior of unable to see me in pain and not letting me sleep with a heavy heart",
    "The way you care for me and everyone around you",
    "You are my forver solace in this chaotic world",
    "You make me want to be a better person",
    "Iam kind of selfish and i want to keep you all to myself",
    "That smile of yours which i want to see every morning and every night",
    "How you always know what I need",
    "For showing me what truly being loved is and making me feel it every day"
];


const constellationStars = document.getElementById('constellationStars');
const modalOverlay = document.getElementById('modalOverlay');
const reasonPopup = document.getElementById('reasonPopup');
const reasonText = document.getElementById('reasonText');

const positions = [
    { top: '20%', left: '15%' },
    { top: '30%', left: '30%' },
    { top: '25%', left: '50%' },
    { top: '35%', left: '70%' },
    { top: '20%', left: '85%' },
    { top: '50%', left: '20%' },
    { top: '55%', left: '45%' },
    { top: '50%', left: '65%' },
    { top: '60%', left: '85%' },
    { top: '70%', left: '25%' },
    { top: '75%', left: '55%' },
    { top: '70%', left: '80%' }
];

let clickedStars = 0;
const totalStars = positions.length;

positions.forEach((pos, index) => {
    const star = document.createElement('div');
    star.className = 'love-star';
    star.style.top = pos.top;
    star.style.left = pos.left;
    
    star.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            clickedStars++;
            
            reasonText.textContent = loveReasons[index];
            modalOverlay.classList.add('show');
            
            if (clickedStars === totalStars) {
                document.body.classList.remove('no-scroll');
            }
        }
    });
    
    constellationStars.appendChild(star);
});


modalOverlay.addEventListener('click', function() {
    this.classList.remove('show');
    
    if (clickedStars === totalStars) {
        setTimeout(() => {
            document.getElementById('scrollHint').classList.add('show');
        }, 500);
    }
});


const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});


const proposalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            startHearts();
        }
    });
}, observerOptions);

proposalObserver.observe(document.getElementById('proposalContainer'));

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

let heartsInterval;
function startHearts() {
    heartsInterval = setInterval(createHeart, 300);
}


const musicToggle = document.getElementById('musicToggle');
const audio = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', function () {
    if (!isPlaying) {
        audio.play();
        this.textContent = '🎵 Music Playing';
        isPlaying = true;
    } else {
        audio.pause();
        this.textContent = '🎵 Click to Play Music';
        isPlaying = false;
    }
});


const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const goodGirlPopup = document.getElementById('goodGirlPopup');
const noClickedPopup = document.getElementById('noClickedPopup');
const closeNoPopup = document.getElementById('closeNoPopup');
const chasePopup = document.getElementById('chasePopup');
const closeChasePopup = document.getElementById('closeChasePopup');

yesBtn.addEventListener('click', function() {
    goodGirlPopup.classList.add('show');
});

goodGirlPopup.addEventListener('click', function() {
    this.classList.remove('show');
});

closeNoPopup.addEventListener('click', function() {
    noClickedPopup.classList.remove('show');
});

noClickedPopup.addEventListener('click', function(e) {
    if (e.target === noClickedPopup) {
        noClickedPopup.classList.remove('show');
    }
});

closeChasePopup.addEventListener('click', function() {
    chasePopup.classList.remove('show');
});


let hasMovedNoButton = false;
let chaseStartTime = null;
let hasShownChasePopup = false;
let isNoButtonFixed = false;

// Store original position
const originalButtonsContainer = noBtn.parentElement;

function moveNoButton() {
    // Don't move if already fixed
    if (isNoButtonFixed) return;
    
    // Get the boundary box
    const boundary = document.getElementById('noButtonBoundary');
    const boundaryRect = boundary.getBoundingClientRect();
    
    // Get button dimensions
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    
    // Calculate movement area within boundary (with padding)
    const padding = 20;
    const minX = padding;
    const minY = padding;
    const maxX = boundaryRect.width - btnWidth - padding;
    const maxY = boundaryRect.height - btnHeight - padding;
    
    // Generate random position within boundary
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.floor(randomX) + 'px';
    noBtn.style.top = Math.floor(randomY) + 'px';
    noBtn.style.margin = '0';
    noBtn.style.transform = 'none';
}

function fixNoButtonPosition() {
    isNoButtonFixed = true;

    noBtn.style.position = 'relative';
    noBtn.style.left = 'auto';
    noBtn.style.top = 'auto';
    noBtn.style.transform = 'none';
    noBtn.style.margin = '0';
    noBtn.style.zIndex = 'auto';
}

noBtn.addEventListener('mouseenter', function(e) {
    if (!hasMovedNoButton) {
        hasMovedNoButton = true;
        chaseStartTime = Date.now();
    }
    
    if (!isNoButtonFixed) {
        const timeElapsed = Date.now() - chaseStartTime;
        
        if (timeElapsed > 10000 && !hasShownChasePopup) {
            hasShownChasePopup = true;
            
            chasePopup.classList.add('show');
            
            fixNoButtonPosition();
        } else {
            e.preventDefault();
            moveNoButton();
        }
    }
});

// Click handler
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (isNoButtonFixed) {
        noClickedPopup.classList.add('show');
    } else {
        if (!chaseStartTime) {
            chaseStartTime = Date.now();
        }
        
        const timeElapsed = Date.now() - chaseStartTime;
        
        if (timeElapsed > 10000 && !hasShownChasePopup) {
            hasShownChasePopup = true;

            chasePopup.classList.add('show');
        
            fixNoButtonPosition();
        } else {
            moveNoButton();
        }
    }
});