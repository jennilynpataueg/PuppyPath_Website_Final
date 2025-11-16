// Select all the show-answer buttons
const buttons = document.querySelectorAll('.show-answer');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the corresponding answer (the <p> element)
        
        // Toggle the 'show' class on the answer to control visibility
        answer.classList.toggle('show'); 

        // Toggle button text to show either "Show Answer" or "Hide Answer"
        if (answer.classList.contains('show')) {
            this.textContent = 'Hide Answer';
        } else {
            this.textContent = 'Show Answer';
        }
    });
});
