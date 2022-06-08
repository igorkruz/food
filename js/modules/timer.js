function timer() {
    // timer 
    // !  deadline - встановлюємо дату дедлайну
    let deadline = '2023-04-13';
    // ! за допомогою розрахунків отримуємо час який залишився до дедлайну 
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        let days, hours, minutes, seconds;

        if (days <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            /* час якй залишився до кінця  */
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
                /* отримуємо дні */
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                /* отримуємо години */
                minutes = Math.floor((t / 1000 / 60) % 60),
                /* отримуємо мінути */
                seconds = Math.floor((t / 1000) % 60); /* отримуємо секунди */
        }

        // ! виводимо обєкт з змінними
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // ! добавляємо 0 перед числами менші за 10
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    // отримуємо доступ до HTML 
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime); /* записуємо в змінну Т обєкт  */
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }
    setClock('.timer', deadline);

}

export default timer;