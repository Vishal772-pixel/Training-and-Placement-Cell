window.onload = function () {
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`; // Delay each card appearance
        card.style.opacity = '1'; // Ensure opacity is set to 1 after loading
    });

    // Fade out the loading screen after page loads
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 2000); // 2-second delay
};
