// JavaScript to handle the interactive feature
document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', function() {
        const infoParagraph = this.nextElementSibling; // Get the next paragraph
        if (infoParagraph.style.display === 'none') {
            infoParagraph.style.display = 'block'; // Show more info
            this.textContent = 'Less Info'; // Change button text
        } else {
            infoParagraph.style.display = 'none'; // Hide more info
            this.textContent = 'More Info'; // Change button text back
        }
    });
});
