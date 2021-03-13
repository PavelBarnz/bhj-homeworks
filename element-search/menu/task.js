let aLinks = document.getElementsByTagName("a"); //HTMLCollection со всеми ссылками на странице.
let mSub = Array.from(document.getElementsByClassName("menu menu_sub")); //Получили массив со списками ul.menu menu_sub.

aLinks = Array.from(aLinks).forEach((item) => {//Цикл, который раздает всем ссылкам событие onclick.
    item.onclick = () => {
        //Каждому подменю присваивается класс по умолчанию "menu menu_sub"
        mSub.forEach((item, index) => {
            mSub[index].className = "menu menu_sub"; 
        });

        let parent = item.closest("li"); //Получаем родителя ссылки.
        let child = parent.querySelector("ul.menu_sub"); //Ищем ul c классом menu_sub внутри родителя ссылки.

        if(child !== null){
            child.className = "menu menu_sub menu_active";
            return false;
        };
    }
});