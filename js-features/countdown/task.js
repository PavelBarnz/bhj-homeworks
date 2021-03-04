let time = document.getElementById("timer");
let ss = +time.textContent;
ss = 5;

let out = setInterval(function() {
    ss--;
    time.textContent = ss;
    if(ss === 0){
        clearInterval(out);;
        document.writeln("Вы победили в конкурсе!");
    };
}, 1000);