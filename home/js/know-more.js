
document.addEventListener('DOMContentLoaded', function() {
    const knowMoreLink = document.querySelector('.know-more');
    const aboutSection = document.getElementById('about');

    knowMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'block';
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
