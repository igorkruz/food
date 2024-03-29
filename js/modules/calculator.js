    function calculator() {
        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;

        if (localStorage.getItem('sex')) {
            sex = localStorage.getItem('sex')
        } else {
            sex = 'female';
            localStorage.setItem('sex', 'female')
        }


        if (localStorage.getItem('ratio')) {
            ratio = localStorage.getItem('ratio')
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375)
        }


        function initLocalSettings(selector, activClass) {
            const elements = document.querySelectorAll(selector);

            elements.forEach(elem => {
                elem.classList.remove(activClass);

                if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                    elem.classList.add(activClass);
                }

                if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    elem.classList.add(activClass)
                }
            });
        }

        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio) {
                result.textContent = '____';
                return;
            }

            if (sex === 'female') {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            } else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }


        calcTotal();

        function getStaticInformation(selector, activeClass) {
            const element = document.querySelectorAll(selector);

            element.forEach(elem => {
                elem.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ration')) {
                        ratio = +e.target.getAttribute('data-ration');
                        localStorage.setItem(ratio, +e.target.getAttribute('data-ration'));
                    } else {
                        sex = e.target.getAttribute('id');
                        localStorage.setItem(sex, e.target.getAttribute('id'))
                    }
                    console.log(ratio, sex);


                    element.forEach(elem => {
                        elem.classList.remove(activeClass);

                    });
                    e.target.classList.add(activeClass);

                    calcTotal();

                });
            })
        }

        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

        function getDinamicInformation(selector) {
            const input = document.querySelector(selector);

            input.addEventListener('input', () => {

                if (input.value.match(/\D/g)) {
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = 'none'
                }

                switch (input.getAttribute('id')) {

                    case 'height':
                        height = +input.value;
                        break;
                    case 'weight':
                        weight = +input.value;
                        break;
                    case 'age':
                        age = +input.value;
                        break;


                }
                calcTotal();

            });

        }

        getDinamicInformation('#height')
        getDinamicInformation('#weight')
        getDinamicInformation('#age')

    }

    export default calculator;