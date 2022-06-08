function modal() {
    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; /* забороняємо прокрутку привіткритому модальному вікні */
        clearInterval(modalTimerId); /* якщо відкриваємо модальне вікно через кнопку то авто-показ не буде */
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);

    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; /* дщзволяємо прокрутку модального вікна після того як його закриємо */

    }


    // !дозволяє закр сод-вікно при натиску за межами мод-вікна
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    // !закр мод-вікн за допомогою escape
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    // !відкр модал через певний час
    const modalTimerId = setTimeout(openModal, 300000);
    // !відкр модал коли пролистали сторінку до кінця
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }

    }


    window.addEventListener('scroll', showModalByScroll);

}

export default modal;