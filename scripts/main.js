document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const dropdownContent = document.getElementById('dropdownMenuContent');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target)) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});


const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // speed: 1500,
    // spaceBetween: 100,
    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 1,
    breakpoints: {
        320: {
            spaceBetween: 20
        },
        480: {
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        }
    }
});
