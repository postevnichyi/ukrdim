// import $ from "jquery";
// import './_media.scss'
// import './node_modules/slick-slider/slick/slick.min.js'
// import './node_modules/slick-slider/slick/slick.css'
// import './node_modules/slick-slider/slick/slick-theme.css'
$(".toggle-mnu").click(function () {
	$(this).toggleClass("on");
  $('body').toggleClass('lock');
  $('.bg-mnu').toggleClass('bg-mnu-blur');
	$(".mnu-line").toggleClass('hidden-mnu');
	return false;
});
$('.people-wrapper').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrow:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ],
});
 let pls_foot = $('.footer-btm');
 if(pls_foot.length > 0) {
   for (let index = 0; index < pls_foot.length; index++) {
    const el1 = $(pls_foot[index]);
    el1.click(function () {
      const chld1 = $(el1.siblings('.footer-item-body'));
      $(pls_foot[index]).toggleClass("minus");
      $(chld1).slideToggle();
      return false;
    })
   }
 }
 let pls = $('.plus-button');
 if(pls.length > 0) {
   for (let index = 0; index < pls.length; index++) {
    const el = $(pls[index]);
    el.click(function () {
      const per = $(el.parent('.box-question'));
      const chld = $(per.siblings('.box-answear'));
      $(pls[index]).toggleClass("minus");
      $(chld).slideToggle();
      return false;
    })
   }
 }
