const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light images
function imageMode(color) {
    image1.src = `undraw_proud_coder_${color}.svg`;
    image2.src = `undraw_feeling_proud_${color}.svg`;
    image3.src = `undraw_conceptual_idea_${color}.svg`;
}


//Dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/50%)';
    toggleIcon.children[0].textContent = 'Dark mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

//Light mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
    toggleIcon.children[0].textContent = 'Light mode';
    toggleIcon.children[1].classList.remove('fa-moon', 'fa-sun');
    image1.src = 'undraw_proud_coder_light.svg';
    image2.src = 'undraw_feeling_proud_light.svg';
    image3.src = 'undraw_conceptual_idea_light.svg';
    imageMode('light')
}


//Switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', '');
        lightMode();
    }
}


//Event listener
toggleSwitch.addEventListener('change', switchTheme);