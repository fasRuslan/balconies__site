const modules = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        //!Куда нажимать для всплытия popup
        trigger.forEach(function (item) {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault()
                }

                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open') //modal-open class bootstrap
            });

        });

        //!Кнопка закрыть
        close.addEventListener('click', function (e) {
            modal.style.display = 'none';
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open') //modal-open class bootstrap
        });

        //! закрытие модального окна по нажатию извне
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open') //modal-open class bootstrap
            }
        })
    }

    function showModelByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    showModelByTime('.popup', 60000);
};

export default modules; //Экспортируем файл в основной файл