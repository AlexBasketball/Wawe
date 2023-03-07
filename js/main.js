document.addEventListener('DOMContentLoaded', ()=> {
    const searchBtn = document.querySelector('.search');
    const headerForm = document.querySelector('.header-form');   
    
    searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        headerForm.classList.add('active');
        searchBtn.classList.add('hidden');
    });

    headerForm.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function(){
        headerForm.classList.remove('active');
        searchBtn.classList.remove('hidden');
    });

    const modal = document.querySelector('.header-modal');
    const modalWindow = document.querySelector('.header-modal__window');
    const modalBtn = document.querySelector('.login');
    const modalClose = document.querySelector('.header-modal__close'); 

    modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');

        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });

    modalWindow.addEventListener('click', function(e){
        e.stopPropagation();
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    })

    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') {
            modal.classList.add('hidden');
        };
    });


    const podcastsBtn = document.querySelector('.podcasts-btn');
    const podcastsItemsSpec = document.querySelectorAll('.podcasts-list__item_spec');

    podcastsBtn.addEventListener('click', () => {
        podcastsItemsSpec.forEach(function(item) {
            if (item.classList.contains('hide')) {
                item.classList.toggle('hide');
                item.classList.add('show');
                item.classList.remove('scale');
                podcastsBtn.textContent = 'Скрыть';
            } else {
                item.classList.remove('show');
                podcastsBtn.textContent = 'Ещё подкасты';
                item.classList.add('scale');
                setTimeout(function () {
                    item.classList.toggle('hide')
                }, 200);                                   
            }
        });     
    });


    const broadcastDropdownBtn = document.querySelector('.broadcast-dropdown__btn');
    const broadcastDropdownList = document.querySelector('.broadcast-dropdown__list');
    const broadcastDropdownListItem = document.querySelectorAll('.broadcast-dropdown__item');

    broadcastDropdownBtn.addEventListener('click', () => {
        broadcastDropdownList.classList.toggle('hidden');
    });

    broadcastDropdownListItem.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            broadcastDropdownBtn.textContent = this.textContent;
            broadcastDropdownList.classList.add('hidden');
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target !== broadcastDropdownBtn) {
            broadcastDropdownList.classList.add('hidden');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            broadcastDropdownList.classList.add('hidden');
        }
    });


    const accordeons = document.querySelectorAll('.accordeon__item');

    accordeons.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const content = self.querySelector('.accordeon__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        })
    })


    const guestModalHeaders = document.querySelectorAll('[data-guest]');
    const guestModalBoxes = document.querySelectorAll('[data-guest-content]');

    guestModalHeaders.forEach(function(item) {
        item.classList.remove('active');
        item.addEventListener('click', function(){
            this.classList.add('active');

            guestModalBoxes.forEach(function(item) {
            item.classList.add('hidden');
        })

            const guestModalBox = document.querySelector('#' + this.dataset.guest);
            guestModalBox.classList.remove('hidden');
        })
    })

    const swiper = new Swiper ('.swiper', {
        direction: 'horizontal', 
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
          },

    })

    const aboutInput = document.querySelectorAll('.about-form__input');
    const aboutForm = document.querySelector('.about-form');

    aboutForm.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Форма не отправлена')
    })

    aboutInput.forEach(function(item) {
        item.addEventListener('input', function() {
            item.value = item.value.replace(/[^a-zA-ZА-Яа-яЁё]/, '');   
        })
    })
});

