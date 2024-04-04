// Add a class to the toolbar when the page is scrolled
window.addEventListener('scroll', () => {
    const toolbar = document.querySelector('.toolbar');
    if (window.scrollY > 0) {
        toolbar.classList.add('toolbar-sticky');
    } else {
        toolbar.classList.remove('toolbar-sticky');
    }
});
