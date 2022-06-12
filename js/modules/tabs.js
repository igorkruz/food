function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, tabSelectorActive) {
    // tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);



    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; !старий варіант
            // !робота з класами
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(tabSelectorActive);
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        // tabs[i].classList.add('tabheader__item_active');
        // ! Using class
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(tabSelectorActive);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

export default tabs;