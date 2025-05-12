const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let bigCookie = true;

cookie.addEventListener('click', function() {
    clickCount ++;
    counter.textContent = clickCount;
    
    if (bigCookie) {
        cookie.width *= 0.9;
        cookie.height *= 0.9;
    } else {
        cookie.width = 200;
        cookie.height = 123;
    }
    bigCookie = !bigCookie;
}); 