const body = document.getElementById('body');
const current_height = window.scrollY
const trans = document.getElementById('transition');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

setInterval(()=>{
    if(isInViewport(trans)){
        box3.style.animationPlayState = 'running';
        box4.style.animationPlayState = 'running';
        box5.style.animationPlayState = 'running';
        box6.style.animationPlayState = 'running';
    }
}, 1000)