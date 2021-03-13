//Элемент стрелки вперед.
let nextArrow = Array.from(document.getElementsByClassName("slider__arrow_next")).pop();

//Элемент стрелки назад.
let prevArrow = Array.from(document.getElementsByClassName("slider__arrow_prev")).pop();

//Массив из коллекции div'ов с картинками.
let slideCollection = Array.from(document.getElementsByClassName("slider__item"))

//Счетчик шагов.
let counter = 0;


//Стрелка вперед.
nextArrow.onclick = () => {
    //При нажатии...
    counter++; //Увеличивается шаг счетчика на 1.
    if(counter > slideCollection.length - 1){ //Если счетчик больше длинны колекции картинок сбросить его на 0.
        counter = 0;
    };

    slideCollection.forEach((item) => { //Цикл, при каждом клике. устанавливает всем блокам с картинками неактивный класс.
        item.className = "slider__item";
    });

    slideCollection[counter].className = "slider__item slider__item_active";//При клике устанавливаем класс, на элементе коллекции равному счетчику.
};



//Стрелка назад.
prevArrow.onclick = () => {
    counter--; //Уменьшаем шаг счетчика на 1.
    if(counter < 0){ //Если счетчик меньше 0, то установить его равно длинне коллекции - 1.
        counter = slideCollection.length - 1;
    };

    slideCollection.forEach((item) => {//Цикл, при каждом клике. устанавливает всем блокам с картинками неактивный класс
        item.className = "slider__item";
    });

    slideCollection[counter].className = "slider__item slider__item_active";//При клике устанавливаем класс, на элементе коллекции равному счетчику.
};




///////////////ПОВЫШЕНАЯ СЛОЖНОСТЬ///////////////////
//Получаем массив точек.
let dotCollection = Array.from(document.getElementsByClassName("slider__dot"));

//Назначем каждой точке событие клика.
dotCollection.forEach((item, index) => {
    item.onclick = () => {

        slideCollection.forEach((item) => {//Цикл, при каждом клике. устанавливает всем блокам с картинками неактивный класс
            item.className = "slider__item";
        });

        slideCollection[index].className = "slider__item slider__item_active"; //При клике устанавливаем класс, на элементе коллекции равному счетчику.
        counter = index;
    };
})