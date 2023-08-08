// Parallax effect on images
const images = document.querySelectorAll('.image-carousel img');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    images.forEach((image) => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        const moveX = (imageCenterX - x) / 40;
        const moveY = (imageCenterY - y) / 40;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Scroll-to-top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
