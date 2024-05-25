const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox=document.getElementById('text-box');


function darkmode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('d')
}

function imageMode(color){
    image1.src=`img/notebook_${color}.svg`;
    image2.src=`img/progress_${color}.svg`;
    image3.src=`img/rain_${color}.svg`;
}

function lightmode(){
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('l');
}


function switchTheme(event){
    // console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkmode();
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightmode();
    }
}

toggleSwitch.addEventListener('change',switchTheme);