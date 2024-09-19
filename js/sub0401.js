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
  const src = new Swiper(".src", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    loop: true
  });

  $(".detail_img li").not(":first").hide();
  $(".detail_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".detail_img li").eq(idx).fadeIn().siblings().hide();
  });


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
