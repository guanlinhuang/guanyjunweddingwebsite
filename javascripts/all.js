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
// $(function () {

//   // show hide subnav depending on scroll direction
//   var position = $(window).scrollTop();

//   $(window).scroll(function () {
//       var scroll = $(window).scrollTop();
//       if (scroll > position) {

//           //only piece that matters
//           $('nav')
//             .stop(true, false)
//               .removeClass('up')
//               .addClass('down');


//           // scrolling downwards, only here for dev purposes
//           console.log('moving DOWN the page');
//           // $('input').val('down');

//       } else {
//           //only piece that matters
//           $('nav')
//               .stop(true, false)
//               .removeClass('down')
//               .addClass('up');


//           // scrolling upwards 
//           console.log('moving UP the page');
//           // $('input').val('up');
//       }

//       position = scroll;
//   });

// });

//swiper

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 'auto',
//   spaceBetween: 0,
//   centeredSlides: true,
//   preventClicks:true,
//   loop:true,  
//   on: {
//     init: function () {
//       $('.swiper-slide').addClass('changed');
//     },
//     slideChangeTransitionStart : function() {
//       $('.swiper-slide').addClass('changing');
//       $('.swiper-slide').removeClass('changed');
//     },
//     slideChangeTransitionEnd : function() {
//       $('.swiper-slide').removeClass('changing');
//       $('.swiper-slide').addClass('changed');
//     }
//   },
// });
// //https://codepen.io/ylem76/pen/VwbRGEg

//相簿1
$(function () {
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true, //設定為true時，活動區塊會居中，而不是預設狀態下的居左
    centeredSlidesBounds: true, //使得投影片居中後，還可以配合設定此參數，使得第一個和最後一個slide 始終貼合邊緣而不會出現缺口。
    //此選項不適用於loop模式並會使pagination出現異常
    //loop: true, //會在原本slide前後複製若干個slide(預設一個)並在適當的時候切換，讓Swiper看起來是循環的
    direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
    spaceBetween: 3, //slide之間的距離
    slidesPerView: 4, //設定slider容器能夠同時顯示的slides數量
    freeMode: false, //slide滑動時只滑動一格，並自動貼合wrapper
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    // breakpoints: {
    //   480: {
    //     direction: "vertical",
    //     slidesPerView: 3
    //   }
    // }
  });
  var galleryTop = new Swiper(".gallery-top", {
    direction: "horizontal",
    //loop: true,
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    a11y: { //輔助，無障礙閱讀。開啟本參數為螢幕閱讀器新增語音提示等訊息，方便視覺障礙者
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    // keyboard: { //鍵盤
    //   enabled: true,
    // },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
});
//https://codepen.io/rogerkuik/pen/abZOLXr

//相簿2
$(function () {
  var galleryThumbs = new Swiper(".gallery-thumbs-2", {
    centeredSlides: true, //設定為true時，活動區塊會居中，而不是預設狀態下的居左
    centeredSlidesBounds: true, //使得投影片居中後，還可以配合設定此參數，使得第一個和最後一個slide 始終貼合邊緣而不會出現缺口。
    //此選項不適用於loop模式並會使pagination出現異常
    //loop: true, //會在原本slide前後複製若干個slide(預設一個)並在適當的時候切換，讓Swiper看起來是循環的
    direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
    spaceBetween: 3, //slide之間的距離
    slidesPerView: 3, //設定slider容器能夠同時顯示的slides數量
    freeMode: false, //slide滑動時只滑動一格，並自動貼合wrapper
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    // breakpoints: {
    //   480: {
    //     direction: "vertical",
    //     slidesPerView: 3
    //   }
    // }
  });
  var galleryTop = new Swiper(".gallery-top-2", {
    direction: "horizontal",
    //loop: true,
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2"
    },
    a11y: { //輔助，無障礙閱讀。開啟本參數為螢幕閱讀器新增語音提示等訊息，方便視覺障礙者
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    // keyboard: { //鍵盤
    //   enabled: true,
    // },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
});

//相簿3
$(function () {
  var galleryThumbs = new Swiper(".gallery-thumbs-3", {
    centeredSlides: true, //設定為true時，活動區塊會居中，而不是預設狀態下的居左
    centeredSlidesBounds: true, //使得投影片居中後，還可以配合設定此參數，使得第一個和最後一個slide 始終貼合邊緣而不會出現缺口。
    //此選項不適用於loop模式並會使pagination出現異常
    //loop: true, //會在原本slide前後複製若干個slide(預設一個)並在適當的時候切換，讓Swiper看起來是循環的
    direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
    spaceBetween: 3, //slide之間的距離
    slidesPerView: 3, //設定slider容器能夠同時顯示的slides數量
    freeMode: false, //slide滑動時只滑動一格，並自動貼合wrapper
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    // breakpoints: {
    //   480: {
    //     direction: "vertical",
    //     slidesPerView: 3
    //   }
    // }
  });
  var galleryTop = new Swiper(".gallery-top-3", {
    direction: "horizontal",
    //loop: true,
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3"
    },
    a11y: { //輔助，無障礙閱讀。開啟本參數為螢幕閱讀器新增語音提示等訊息，方便視覺障礙者
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    // keyboard: { //鍵盤
    //   enabled: true,
    // },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
});

//表單留言
function GoogleForm() { //這裡要對應到自己的 javascript 名稱
  //宣告欄位
  var field1 = $("[name='Name']").val();
  var field2 = $("[name='Text']").val();
  $.ajax({
   url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_j1pL30Hab_ETr0-ACaueuS4xUraGPiPOzelKTZBEmXSymw/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
   data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
    "entry.565983712": field1,
    "entry.617255079": field2
   },
   type: "POST",
   dataType: "xml",
   statusCode: {
    0: function() {
     alert("謝謝您們的祝福!"); //完成送出表單的警告視窗
     //window.location.assign("http://google.com"); //送出表單後的導向
    },
    200: function() {
     alert("謝謝您們的祝福!"); //完成送出表單的警告視窗
     //window.location.assign("http://google.com"); //送出表單後的導向
    }
   }
  });
 }