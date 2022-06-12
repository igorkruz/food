function openModal(modalSelector, modalTimerId) {
    modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');

    document.body.style.overflow = 'hidden'; /* забороняємо прокрутку привіткритому модальному вікні */
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId); /* якщо відкриваємо модальне вікно через кнопку то авто-показ не буде */
    }
}

function closeModal(modalSelector) {
    modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; /* дщзволяємо прокрутку модального вікна після того як його закриємо */

}



function modal(triggerSelector, modalSelector, modalTimerId) {
    // modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));

    });

    // !дозволяє закр сод-вікно при натиску за межами мод-вікна
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    // !закр мод-вікн за допомогою escape
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
    // !відкр модал через певний час
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }

    }


    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {
    closeModal
};
export {
    openModal
};