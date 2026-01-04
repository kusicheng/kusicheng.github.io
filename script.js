    // 1. Define your list of images
const imageList = [
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_1.jpg",
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_2.jpg", // Example of large image
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_3.jpg",  // Example of small image
];

    const track = document.getElementById('track');
    let currentIndex = 0;

    function initCarousel() {
        // Clear track just in case
        track.innerHTML = '';
        
        imageList.forEach((url, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';

            const img = document.createElement('img');
            img.src = url;
            img.alt = `Slide ${index}`;

            slide.appendChild(img);
            track.appendChild(slide);
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= imageList.length) {
            currentIndex = 0;
        }
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    initCarousel();
    setInterval(nextSlide, 3000);

