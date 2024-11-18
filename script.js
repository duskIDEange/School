// Animation for activity cards
document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
        // Add bounce animation
        card.style.animation = 'bounce 0.5s';
        setTimeout(() => {
            card.style.animation = '';
        }, 500);
    });
});

// Add hover sound effects to navigation buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        playHoverSound();
    });
});

// Simple sound effect function
function playHoverSound() {
    const audio = new Audio('assets/hover.mp3');
    audio.volume = 0.2;
    audio.play().catch(err => console.log('Audio play failed:', err));
}

// Welcome message
window.addEventListener('load', () => {
    setTimeout(() => {
        const welcome = document.createElement('div');
        welcome.className = 'welcome-popup';
        welcome.innerHTML = `
            <h2>Welcome to our Learning Adventure! 🌟</h2>
            <p>Are you ready to learn and have fun?</p>
        `;
        document.body.appendChild(welcome);

        setTimeout(() => {
            welcome.style.opacity = '0';
            setTimeout(() => {
                welcome.remove();
            }, 1000);
        }, 3000);
    }, 1000);
}); 