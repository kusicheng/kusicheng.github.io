
const imageList_yabuli = [
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_1.jpg",
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_2.jpg",
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/yabuli_3.jpg",
];

const imageList_hakuba = [
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/hakuba_1.jpg",
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/hakuba_2.jpg",
    "https://raw.githubusercontent.com/kusicheng/websiteassets/main/pages/hakuba_3.jpg",
];

let currentIndexList = [0,0,0,0,0,0,0,0,0,0,0];

function initCarousel(imageList, trackId) {
    const track = document.getElementById(trackId);
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

function nextSlide(indexId) {
    currentIndexList[indexId]++;
    if (currentIndexList[indexId] >= 3) {
        currentIndexList[indexId] = 0;
    }
    track=document.getElementById(indexId === 0 ? 'yabuli_track' : 'hakuba_track');
    track.style.transform = `translateX(-${currentIndexList[indexId] * 100}%)`;
}

function yabuli_carousel_auto() {
    initCarousel(imageList_yabuli, 'yabuli_track');
    setInterval(() => {nextSlide(0);}, 3000);
}

function hakuba_carousel_auto() {
    initCarousel(imageList_hakuba, 'hakuba_track');
    setInterval(() => {nextSlide(1);}, 3000);
}

yabuli_carousel_auto();
hakuba_carousel_auto();