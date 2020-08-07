// toggle responsive
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// sticky
window.addEventListener('scroll', function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// pagescroll
$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 150
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

})
