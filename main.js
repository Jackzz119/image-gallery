const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// const images src and alt

const thumbImages = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const thumbTexts = {
    'pic1.jpg': 'A man\'s eye', 
    'pic2.jpg': 'wave', 
    'pic3.jpg': 'purple flowers', 
    'pic4.jpg': 'wall painting', 
    'pic5.jpg': 'butterfly on a leaf'};

// loop for thumbBar

for (let i = 0; i < thumbImages.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${thumbImages[i]}`);
    newImage.setAttribute('alt', thumbTexts[thumbImages[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

// Darken and lighten overlay

btn.addEventListener('click', () => {
    const className = btn.getAttribute('class');
    if (className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});