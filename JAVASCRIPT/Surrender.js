// Add this script inside your <script> tags or external JS file
window.onscroll = function() {
    const nav = document.querySelector('.container'); // Select the navigation bar
    if (window.scrollY > 100) { // Change 100 to whatever scroll threshold you want
        nav.classList.add('faded'); // Add the "faded" class when scrolling
    } else {
        nav.classList.remove('faded'); // Remove the "faded" class when at the top
    }
};