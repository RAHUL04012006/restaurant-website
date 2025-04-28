let header = document.querySelector('.header');
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    };
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.service .box', { origin: 'bottom' });
ScrollReveal().reveal('.about .row .image', { origin: 'left' });
ScrollReveal().reveal('.about .row .content', { origin: 'right' });
ScrollReveal().reveal('.gallery .box', { origin: 'bottom' });
ScrollReveal().reveal('.price .box', { origin: 'bottom' });
ScrollReveal().reveal('.review-slider', { origin: 'bottom' });
ScrollReveal().reveal('.contact form', { origin: 'bottom' });

const form = document.querySelector('.contact form');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (isValid) {
        alert('Message sent successfully!');
        form.reset();
    } else {
        alert('Please fill in all fields');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    document.querySelector('.loader-container').classList.add('fade-out');
});

document.querySelectorAll('.gallery .box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.querySelector('img').style.transform = 'scale(1.1)';
    });
    box.addEventListener('mouseleave', () => {
        box.querySelector('img').style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.service .box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });
});

document.querySelectorAll('.price .box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });
});
