// робимо ІФІ щоб ненаплодити глобальних змінних
(function () {
    const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");
    
    function toggleModal(ev) {
        modal.classList.toggle("show-modal");
        ev.stopPropagation();
    }
    
    // function windowOnClick(event) {
    //     if (event.target === modal) {
    //         toggleModal();
    //     }
    // }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modal.addEventListener("click", toggleModal);
    
    
    // function toggleModal - функція переключити модальне вікно, вона переключає клас
    // "show-modal" на .modal
    // Тобто клас "show-modal" якщо був забирається, і якщо небув додається.
    // function windowOnClick(event) цю функцію додаємо на window.addEventListener("click", windowOnClick); - це не добре, краще додати до модального вікна
    
    // function windowOnClick(event) {
    //     if (event.target === modal) {
    //         toggleModal();
    //     }
    // } Якщо я клікаю по вікну і tarrget модальне вікно
    
    // Три обробника
    // trigger.addEventListener("click", toggleModal); - до кнопки
    // closeButton.addEventListener("click", toggleModal); - до кнопки закрити
    // window.addEventListener("click", windowOnClick); - до вікна - не добре що обробник на віндов, тому змінюємо коментуємо функцію function windowOnClick(event)

    // Дебажили, після натискання закрити вікно, function toggleModal() {...}
    // запускається два рази, кнопка лежить у середині модального вікна, і ця подія провалилася далі
    // тому треба зупиняти подальше виконання подій, треба зробити ev.stopPropagation();




})();




