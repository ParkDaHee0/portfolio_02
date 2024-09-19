$(document).ready(function () {
  // 뎁스2
  $(".depth2").hide();

  $(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });


  // 햄버거 클릭시 모달창 띄우기
  $(".modal").hide();

  $(".mgnb .btn_ham").click(function () {
    $(".modal").stop().fadeIn();
  });


  // 모바일 뎁스2 
  $(".mgnb_depth2").hide();

  $(".mgnb_list>li").mouseenter(function () {
    $(this).find(".mgnb_depth2").stop().fadeIn();
  });

  $(".mgnb_list>li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });


  // 뒤로가기 버튼 동작
  $(".modal_ico").click(function () {
    $(".modal").stop().fadeOut();
  });


  // 추천 와인
  const rc = new Swiper(".rc", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 163,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    loop: true

  });



  // 예약하기 스와이퍼
  const reservation_txt = new Swiper(".reservation_txt", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
  });

  const reservation_img = new Swiper(".reservation_img", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    loop: true
  });

  // 두 개의 슬라이드를 연동시켜 구동시키기
  reservation_txt.controller.control = reservation_img;
  reservation_img.controller.control = reservation_txt;

  //go-top버튼 클릭시 제일 위로 가도록 구동
  $(window).scroll(function () {

    if ($(this).scrollTop() > 500) {
      $(".go_top").addClass("on");
    }
    else {
      $(".go_top").removeClass("on");
    }

  });

  $(".go_top").click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
