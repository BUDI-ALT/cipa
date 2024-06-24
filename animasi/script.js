document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('p');
    message.addEventListener('mouseover', function() {
        message.style.color = '#ff69b4';
    });
    message.addEventListener('mouseout', function() {
        message.style.color = '#333';
    });
});
