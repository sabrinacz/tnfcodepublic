jQuery("#timeline-years").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: "#timeline-content",
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: true,
  centerPadding: "60px",
  initialSlide: 23,
  responsive: [
    {
      breakpoint: 1055,
      settings: {
        slidesToShow: 3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 671,
      settings: {
        slidesToShow: 3,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerPadding: "20px",
      },
    },
  ],
});
jQuery("#timeline-content").slick({
  asNavFor: "#timeline-years",
  dots: false,
  arrows: false,
  infinite: false,
  initialSlide: 18,
});
jQuery("#timeline-years").slick("slickGoTo", 24);
jQuery("#timeline-content").slick("slickGoTo", 24);
jQuery("#timeline-years .slick-list").mouseout(checkCurrentSlide);
jQuery("#timeline-years .slick-list").mouseup(checkCurrentSlide);
document.querySelector("#timeline-years .slick-list").addEventListener("touchend", checkCurrentSlide);
document.querySelector("#timeline-years .slick-list").addEventListener("touchcancel", checkCurrentSlide);
jQuery("#timeline-content .slick-list").mouseout(checkCurrentSlide);
jQuery("#timeline-content .slick-list").mouseup(checkCurrentSlide);
document.querySelector("#timeline-content .slick-list").addEventListener("touchend", checkCurrentSlide);
document.querySelector("#timeline-content .slick-list").addEventListener("touchcancel", checkCurrentSlide);
function checkCurrentSlide() {
  let currentYearSlide = parseInt(jQuery("#timeline-years .slick-current").attr("data-slick-index"), 10);
  let currentContentSlide = parseInt(jQuery("#timeline-content .slick-current").attr("data-slick-index"), 10);
  if (currentYearSlide === 0 || currentContentSlide === 0) {
    jQuery("#timeline-previous").addClass("ibm-hide");
  } else if (currentYearSlide === jQuery("#timeline-years .slick-slide").length - 1 || currentContentSlide === jQuery("#timeline-years .slick-slide").length - 1) {
    jQuery("#timeline-next").addClass("ibm-hide");
  } else {
    jQuery("#timeline-previous").removeClass("ibm-hide");
    jQuery("#timeline-next").removeClass("ibm-hide");
  }
}
jQuery("#timeline-years .slick-slide").click(function (e) {
  let targetSlideNumber;
  if (parseInt(jQuery(e.target).attr("data-slick-index"), 10)) {
    targetSlideNumber = parseInt(jQuery(e.target).attr("data-slick-index"), 10);
  } else {
    targetSlideNumber = parseInt(jQuery(e.target).attr("slide-number"), 10);
  }
  jQuery("#timeline-years").slick("slickGoTo", targetSlideNumber);
  checkCurrentSlide();
});
jQuery("#timeline-previous").click(function (e) {
  let targetSlideNumber = parseInt(jQuery("#timeline-years .slick-current").attr("data-slick-index"), 10);
  jQuery("#timeline-years").slick("slickGoTo", targetSlideNumber - 1);
  checkCurrentSlide();
});
jQuery("#timeline-next").click(function (e) {
  let targetSlideNumber = parseInt(jQuery("#timeline-years .slick-current").attr("data-slick-index"), 10);
  jQuery("#timeline-years").slick("slickGoTo", targetSlideNumber + 1);
  checkCurrentSlide();
});
