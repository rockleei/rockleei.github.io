const blob = document.querySelector('.blob');
    
document.addEventListener('mousemove', (event) => {
    blob.style.left = `${event.clientX - blob.offsetWidth / 2}px`;
    blob.style.top = `${event.clientY - blob.offsetHeight / 2}px`;
});