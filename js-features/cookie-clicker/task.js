let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

let counter = +clickerCounter.textContent;
let timeClick;

cookie.onclick = () => {
    counter++;
    clickerCounter.textContent = counter;
    cookie.width = 250;
    let timeClick = new Date().getTime();
    setTimeout(()=>{cookie.width = 200}, 50);
};
