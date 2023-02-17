document.addEventListener('DOMContentLoaded', ()=> {
    const searchBtn = document.querySelector('.search');
    const headerForm = document.querySelector('.header-form');
    const modal = document.querySelector('.header-modal');
    const modalBtn = document.querySelector('.login');
    const modalClose = document.querySelector('.header-modal__close');    

    
    searchBtn.addEventListener('click', () => {
        headerForm.classList.add('active');
        searchBtn.classList.add('hidden');
    });

    modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');

        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });

    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') {
            modal.classList.add('hidden');
        };
    });


    const podcastsBtn = document.querySelector('.podcasts-btn');
    const podcastsItemsSpec = document.querySelectorAll('.podcasts-list__item_spec');
    
    podcastsBtn.addEventListener('click', () => {
        podcastsItemsSpec.forEach(function(item) {
            if (item.classList.contains('hidden')) {
                item.classList.toggle('hidden');
                item.style.position = 'relative';
                podcastsBtn.textContent = 'Скрыть';
            } else {
                item.classList.toggle('hidden');
                item.style.position = 'absolute';
                podcastsBtn.textContent = 'Ещё подкасты';
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
    
});

