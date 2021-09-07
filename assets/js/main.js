// active header

const menu = $('.nav-item__link')

menu.click(function() {
    $('.nav-item__link.active').removeClass('active')
    $(this).addClass('active')
})

// Counter up
const counters = document.querySelectorAll('.counter-item__num')
const speed = 1000

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 100);
        }
        else {
            count.innerText = target;
        }
    }
    updateCount()
})

// Tab UI

$(document).ready(function() {
    $('.menu-item__link').click(function() {
        const value = $(this).attr('data-filter')
        if (value === 'all') {
            $('.projects').show('1000');
        }
        else {
            $('.projects').not('.' + value).hide('1000');
            $('.projects').filter('.' + value).show('1000');
        }
    })
    // add class active
    $('.menu-item__link').click(function() {
        $('.menu-item__link.active').removeClass('active')
        $(this).addClass('active')
    })
})

// Scroll-top-btn

const scrollTopBtn = $('.scroll-top-btn')

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.removeClass('hidden')
    }
    else {
        scrollTopBtn.addClass('hidden')
    }
};


// navbar-mobile-tablet

const navbar = $('.navbar-btn')

navbar.click(function() {
    $('.nav').addClass('transX')

    $('.nav-overlay').addClass('show')
})

const navbarClose = $('.navbar-close-btn')

navbarClose.click(function() {
    $('.nav.transX').removeClass('transX')
    $('.nav-overlay.show').removeClass('show')
})

const overlay = $('.nav-overlay')

overlay.click(function() {
    $('.nav.transX').removeClass('transX')
    $('.nav-overlay.show').removeClass('show')
})

const navItems = $('.nav-item__link')

navItems.click(function() {
    $('.nav.transX').removeClass('transX')
    $('.nav-overlay.show').removeClass('show')
})