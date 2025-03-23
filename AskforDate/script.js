// Create floating hearts background
function createHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 15 + 10) + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.1;
            const size = Math.random() * 30 + 10;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            heart.style.zIndex = '1';
            document.body.appendChild(heart);
            
            // Remove the heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 2500);
        }, i * 800);
    }
}

// Initial hearts
createHearts();

// Continue creating hearts
setInterval(createHearts, 16000);

// No button movement logic
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const responseDiv = document.getElementById('response');
const dateDetails = document.getElementById('date-details');
const confirmBtn = document.getElementById('confirm-btn');
const dateSelect = document.getElementById('date-select');
const celebration = document.getElementById('celebration');

let noClickCount = 0;

noBtn.addEventListener('mouseover', () => {
    // Move the "No" button to a random position
    const containerWidth = document.querySelector('.container').offsetWidth - noBtn.offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight - noBtn.offsetHeight;
    
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * (containerHeight - 100);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    if (noClickCount === 1) {
        responseDiv.textContent = "Are you sure? Try again...";
    } else if (noClickCount === 2) {
        responseDiv.textContent = "Please? I promise it'll be fun!";
    } else if (noClickCount === 3) {
        responseDiv.textContent = "Okay, I'll just make the 'Yes' button bigger...";
        yesBtn.style.transform = 'scale(1.2)';
    } else if (noClickCount === 4) {
        responseDiv.textContent = "I won't give up that easily!";
        // Increase yes button size further
        yesBtn.style.transform = 'scale(1.5)';
        yesBtn.style.padding = '1rem 3rem';
    } else {
        responseDiv.textContent = "Still trying to click 'No'? How about now?";
        // Make no button tiny
        noBtn.style.transform = 'scale(0.5)';
    }
});

yesBtn.addEventListener('click', () => {
    responseDiv.textContent = "Yay! You've made me so happy!";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Show the date details form with animation
    dateDetails.style.display = 'block';
    
    // Create celebration effects
    celebration.style.display = 'block';
    createConfetti();
    
    // Make the hearts more intense
    createHearts();
    createHearts();
});

confirmBtn.addEventListener('click', () => {
    if (dateSelect.value) {
        let day = dateSelect.options[dateSelect.selectedIndex].text;
        responseDiv.textContent = `It's a date! See you ${day}! ❤️`;
        dateDetails.innerHTML = `<h2>It's a date!</h2><p>I'm looking forward to seeing you ${day}!</p><p>I'll text you to confirm the details. This is going to be wonderful!</p>`;
        createHearts();
    } else {
        alert("Please select a day for our date!");
    }
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = getRandomColor();
        celebration.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff3a5e', '#ff85a1', '#fbb1bd', '#f9bec7', '#fae3e3', '#ffffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}