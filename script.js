const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor= isDark? 'rgb(0 0 0 / 50%)' :'rgb(0 0 0 / 50%)';
    document.getElementById('text-box').style.backgroundColor= isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent=isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    isDark ? imageMode('d') : imageMode('l');
}

function imageMode(color){
    const images=['notebook','progress','rain'];
    images.forEach((image,index)=>{
        document.getElementById(`image${index+1}`).src=`img/${image}_${color}.svg`;
    })
}

function switchThemeHandler(theme,bool){
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
    toggleDarkLightMode(bool);
}

function switchTheme(event){
    // console.log(event.target.checked);
    event.target.checked ? switchThemeHandler('dark',true) : switchThemeHandler('light',false);
}

toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme==='dark'){
        toggleSwitch.checked=true;
        toggleDarkLightMode(true);
    }
}