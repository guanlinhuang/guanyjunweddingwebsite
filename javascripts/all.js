// 字體滑入
anime.timeline({ loop: 1 })
  .add({
    targets: '.cover p',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  })
  // .add({
  //   targets: '.cover',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  // });
// 要載入正確的js <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>


//導覽列消失跟出現
$(function () {

  // show hide subnav depending on scroll direction
  var position = $(window).scrollTop();

  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > position) {

          //only piece that matters
          $('nav')
            .stop(true, false)
              .removeClass('up')
              .addClass('down');


          // scrolling downwards, only here for dev purposes
          console.log('moving DOWN the page');
          $('input').val('down');

      } else {
          //only piece that matters
          $('nav')
              .stop(true, false)
              .removeClass('down')
              .addClass('up');


          // scrolling upwards 
          console.log('moving UP the page');
          $('input').val('up');
      }

      position = scroll;
  });

});
