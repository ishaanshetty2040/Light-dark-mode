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
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageMode('dark');
}

//Light mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%)';
    toggleIcon.children[0].textContent = 'Light mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'undraw_proud_coder_light.svg';
    image2.src = 'undraw_feeling_proud_light.svg';
    image3.src = 'undraw_conceptual_idea_light.svg';
    imageMode('light')
}


//Switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', '');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}


//Event listener
toggleSwitch.addEventListener('change', switchTheme);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}
