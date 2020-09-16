const {
    forEach
} = require("core-js/fn/array");

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);


    //cкрывать контент    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    tab.forEach(item => {
        item.classList.remove(activeClass);
    });
    // берет из массива глобальную переменную content
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, i) => {
                if (target == item || item.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })

        }
    });

};

export defaults tabs;