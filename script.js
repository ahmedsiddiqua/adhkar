document.addEventListener('click', function() {
    const activeBox = document.querySelector('.box.active');
    const nextBox = activeBox.nextElementSibling || document.querySelector('.box:first-child');

    // Remove active class from current box
    activeBox.classList.remove('active');

    // Add active class to next box
    nextBox.classList.add('active');

    // Smooth scroll to the top of the next box with animation
    smoothScrollTo(nextBox);
});

function smoothScrollTo(element) {
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
