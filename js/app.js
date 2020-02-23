// Jquery Code
var widthScreen = $(window).width();

if (widthScreen > 800) {
    $('.btn-1').addClass('btn-active');
} else {
    $('.btn-1').removeClass('btn-active');
}

$(window).resize(() => {
    widthScreen = $(window).width();

    if (widthScreen > 800) {
        $('.btn-1').addClass('btn-active');
    } else {
        $('.btn-1').removeClass('btn-active');
    }
});

var hamburger = true;

$(document).ready(() => {
    $('.hamburger').click(() => {
        console.log('click');
        var menu = $('.header__navigation-list');
        var icon = $('#hamburger');
        menu.slideDown(200);

        if (menu.hasClass('header-show')) {
            menu.slideUp(200);
            menu.removeClass('header-show');
            menu.hide();
        } else {
            menu.addClass('header-show');
        }
        icon.toggleClass('hamburger', 200);
        icon.toggleClass('hamburger-close', 200);
    });

    $('.show-more').click(() => {
        var list = $('.services__items');
        list.slideToggle(200);
    });

    $('.show__more').click(() => {
        var list = $('.show-more-about');
        list.slideToggle(200);
    });

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(':focus')) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    // $('.btn-1').click(() => {
    //     if ($(window).width() < 800) {
    //         var form1 = $('#form--1');
    //         var form2 = $('#form--2');

    //         $('.btn-1').toggleClass('btn-active');
    //         $('.btn-2').removeClass('btn-active');
    //         $('.btn-3').removeClass('btn-active');
    //         form1.toggleClass('form-show');
    //         form1.toggleClass('form--1');
    //         form2.removeClass('form-show');
    //     }
    // });

    // $('.btn-2').click(() => {
    //     if ($(window).width() < 800) {
    //         var form1 = $('#form--1');
    //         var form2 = $('#form--2');

    //         $('.btn-1').removeClass('btn-active');
    //         $('.btn-2').toggleClass('btn-active');
    //         $('.btn-3').removeClass('btn-active');

    //         form2.toggleClass('form-show');
    //         form2.toggleClass('form--2');
    //         form1.removeClass('form-show');
    //         form1.removeClass('form--1');
    //     }
    // });
});

// if (window.innerWidth < 800) {
//     var i = document.querySelector('.btn-1').classList.remove('btn-active');
// }
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 800) {
//         document.querySelector('.btn-1').classList.remove('btn-active');
//     } else {
//         document.querySelector('.btn-1').classList.add('btn-active');
//     }
// });

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-1').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-1').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-1').classList.add('btn-center');
    }
});

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-2').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-2').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-2').classList.add('btn-center');
    }
});

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-3').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-3').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-3').classList.add('btn-center');
    }
});

var classs;

document.querySelector('.show-more').addEventListener('click', () => {
    classs = document.querySelector('.show-more-text').textContent;
    if (classs === 'Mehr lesen') {
        document.querySelector('.show-more-text').textContent = 'Weniger lesen';
    } else {
        document.querySelector('.show-more-text').textContent = 'Mehr lesen';
    }

    document.querySelector('.show-more svg').classList.toggle('show-more-svg');
    document.querySelector('.show-more svg').classList.toggle('show-less-svg');
});

var classss;

document.querySelector('.show__more').addEventListener('click', () => {
    classs = document.querySelector('.show__more-text').textContent;
    if (classs === 'Mehr lesen') {
        document.querySelector('.show__more-text').textContent = 'Weniger lesen';
    } else {
        document.querySelector('.show__more-text').textContent = 'Mehr lesen';
    }

    document.querySelector('.show__more svg').classList.toggle('show__more-svg');
    document.querySelector('.show__more svg').classList.toggle('show__less-svg');
});

var primary = ['ca.', 'rund ', 'Über ', 'rund ', 'ca. ', 'ca. '];

var big = ['500.000', '120 Mio.', '12.000', '40.000', '300.000', '6,2 Mio'];

var logoNum = 0;

var path = [
    'assets/sgs-tuv-iso-9001-tcl.png',
    'assets/ssl-logo.png',
    'assets/sgs-tuv-iso-27001-tcl.png',
    'assets/ekomi-gold.png'
];

var logo = [
    'assets/group-8.svg',
    'assets/group-22_2.svg',
    'assets/group-9.svg',
    'assets/group-22.svg'
];

var logoHeading = ['Schnell', 'Vernetzt', 'Entlastend', 'Zuverlässig'];

var logoContent = [
    'Lassen Sie Fahrzeuge regional noch am selben Tag, bundesweit innerhalb von 72 Stunden zu.',
    'KfZ-Experten an über 500 Standorten bundesweit betreuen Ihre Zulassungen flächendeckend.',
    'Unser Service schont die Ressourcen Ihrer Mitarbeiter, um Ihre Produk-tivität im Tagesgeschäft zu steigern.',
    'Professionelle Prozesse ermöglichen Fahrzeugzulassungen, auch wenn Ihre Mitarbeiter ausfallen.'
];

var imge = 2;
var size;

setInterval(() => {
    size = widthScreen;
}, 100);

if (widthScreen < 800) {
    setInterval(() => {
        if (widthScreen < 800) {
            document.getElementById('abt-tile-1').textContent = primary[0];
            document.getElementById('abt-tile-2').textContent = primary[1];

            if (document.getElementById('dot-one').classList.contains('dot-active-white')) {
                document.getElementById('dot-one').classList.remove('dot-active-white');
                document.getElementById('dot-one').classList.remove('dot-active');
                document.getElementById('dot-two').classList.add('dot-active-white');
                document.getElementById('dot-two').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[2] + '<span class="big-text">' + big[2] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[3] + '<span class="big-text">' + big[3] + '</span>';
            } else if (document.getElementById('dot-two').classList.contains('dot-active-white')) {
                document.getElementById('dot-two').classList.remove('dot-active-white');
                document.getElementById('dot-two').classList.remove('dot-active');
                document.getElementById('dot-three').classList.add('dot-active-white');
                document.getElementById('dot-three').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[4] + '<span class="big-text">' + big[4] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[5] + '<span class="big-text">' + big[5] + '</span>';
            } else if (
                document.getElementById('dot-three').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three').classList.remove('dot-active-white');
                document.getElementById('dot-three').classList.remove('dot-active');
                document.getElementById('dot-one').classList.add('dot-active-white');
                document.getElementById('dot-one').classList.add('dot-active');
                document.getElementById('abt-tile-1').innerHTML =
                    primary[0] + '<span class="big-text">' + big[0] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[1] + '<span class="big-text">' + big[1] + '</span>';
            }
        }
    }, 2000);

    setInterval(() => {
        if (widthScreen < 800) {
            if (document.getElementById('dot-zero-brands').classList.contains('dot-active-white')) {
                document.getElementById('dot-zero-brands').classList.remove('dot-active-white');
                document.getElementById('dot-zero-brands').classList.remove('dot-active');
                document.getElementById('dot-one-brands').classList.add('dot-active-white');
                document.getElementById('dot-one-brands').classList.add('dot-active');

                document.querySelector('.brand__image-one').src = path[1];
            } else if (
                document.getElementById('dot-one-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-brands').classList.remove('dot-active-white');
                document.getElementById('dot-one-brands').classList.remove('dot-active');
                document.getElementById('dot-two-brands').classList.add('dot-active-white');
                document.getElementById('dot-two-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[2];
            } else if (
                document.getElementById('dot-two-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-two-brands').classList.remove('dot-active-white');
                document.getElementById('dot-two-brands').classList.remove('dot-active');
                document.getElementById('dot-three-brands').classList.add('dot-active-white');
                document.getElementById('dot-three-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[3];
            } else if (
                document.getElementById('dot-three-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three-brands').classList.remove('dot-active-white');
                document.getElementById('dot-three-brands').classList.remove('dot-active');
                document.getElementById('dot-zero-brands').classList.add('dot-active-white');
                document.getElementById('dot-zero-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[0];
            }
        }
    }, 2000);

    setInterval(() => {
        if (widthScreen < 800) {
            if (logoNum === 0) {
                document.getElementById('benefits-img').src = logo[1];
                document.getElementById('benefits-heading').textContent = logoHeading[1];
                document.getElementById('benefits-content').textContent = logoContent[1];

                document.getElementById('dot-zero-benefit').classList.remove('dot-active');
                document.getElementById('dot-one-benefit').classList.add('dot-active');
                logoNum = 1;
            } else if (logoNum === 1) {
                document.getElementById('benefits-img').src = logo[2];
                document.getElementById('benefits-heading').textContent = logoHeading[2];
                document.getElementById('benefits-content').textContent = logoContent[2];

                document.getElementById('dot-one-benefit').classList.remove('dot-active');
                document.getElementById('dot-two-benefit').classList.add('dot-active');
                logoNum = 2;
            } else if (logoNum === 2) {
                document.getElementById('benefits-img').src = logo[3];
                document.getElementById('benefits-heading').textContent = logoHeading[3];
                document.getElementById('benefits-content').textContent = logoContent[3];

                document.getElementById('dot-two-benefit').classList.remove('dot-active');
                document.getElementById('dot-three-benefit').classList.add('dot-active');
                logoNum = 3;
            } else if (logoNum === 3) {
                document.getElementById('benefits-img').src = logo[0];
                document.getElementById('benefits-heading').textContent = logoHeading[0];
                document.getElementById('benefits-content').textContent = logoContent[0];

                document.getElementById('dot-three-benefit').classList.remove('dot-active');
                document.getElementById('dot-zero-benefit').classList.add('dot-active');
                logoNum = 0;
            }
        }
    }, 2000);
}
// SERVICES CAROUSEL{

// Forms Clicks
document.querySelector('.btn-1').addEventListener('click', () => {
    document.querySelector('.form--2').style.display = 'none';
    document.querySelector('.form--3').style.display = 'none';
    document.querySelector('.btn-2').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.remove('btn-active');
    document.querySelector('.btn-1').classList.add('btn-active');
    document.querySelector('.form--1').style.display = 'block';
});
document.querySelector('.btn-2').addEventListener('click', () => {
    document.querySelector('.form--1').style.display = 'none';
    document.querySelector('.form--3').style.display = 'none';
    document.querySelector('.btn-1').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.remove('btn-active');
    document.querySelector('.btn-2').classList.add('btn-active');
    document.querySelector('.form--2').style.display = 'block';
});

document.querySelector('.btn-3').addEventListener('click', () => {
    document.querySelector('.form--1').style.display = 'none';
    document.querySelector('.form--2').style.display = 'none';
    document.querySelector('.btn-1').classList.remove('btn-active');
    document.querySelector('.btn-2').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.add('btn-active');
    document.querySelector('.form--3').style.display = 'block';
});
