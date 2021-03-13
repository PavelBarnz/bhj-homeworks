//Отображение всплывающего окна
let popUp = document.getElementsByClassName("modal");
popUp[0].className = "modal modal_active";

//Нажатие на кнопку "Сделать хорошо"!
let btn = document.getElementsByClassName("show-success");
if(btn[0].onclick){console.log(true)};
btn[0].onclick = function(){
    popUp[0].className = "modal";
    popUp[1].className = "modal modal_active";
};

//Закрытие окон.
let off = document.getElementsByClassName("modal__close_times");
for(let x of off){
    x.onclick = function(){
        popUp[0].className = "modal";
        popUp[1].className = "modal";
    };
};