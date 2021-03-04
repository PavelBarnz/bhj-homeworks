let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let countDead = +dead.textContent;
let countLost = +lost.textContent;


for( let i = 1; i < 10; i++){
    let hole = document.getElementById(`hole${i}`)
    hole.onclick = () => {
        if(hole.className.includes("hole_has-mole")){
            countDead++;
            dead.textContent = countDead;
            if(countDead == 10){
                alert("Вы выиграли!");
                dead.textContent = (countDead = 0);
                lost.textContent = (countLost = 0);
            };
        } else {
            countLost++;
            lost.textContent = countLost;
            if(countLost == 5){
                alert("Вы проиграли!");
                dead.textContent = (countDead = 0);
                lost.textContent = (countLost = 0);
            };
        };
    };
};