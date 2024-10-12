document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').textContent = "Thank you for your love!";
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    
    // Generate random positions
    const randomX = Math.floor(Math.random() * 200) - 100; // Adjust range as needed
    const randomY = Math.floor(Math.random() * 200) - 100; // Adjust range as needed
    
    // Change position of the "No" button
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

document.getElementById('noButton').addEventListener('click', function() {
    // You can keep this empty or add any functionality if needed
});
