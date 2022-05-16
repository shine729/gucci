$(window).on('scroll', function() {
    checkVisibility('.box_wrap div');
  });

  function checkVisibility(selector) {
    var scrollAmt = $(document).scrollTop();
    $(selector).each(function() {
      var $selector = $(this)
      var minScroll = $selector.offset().top - $(window).height()-50;
      var maxScroll = $selector.offset().top + $selector.outerHeight()-50;
      console.log(minScroll + ' ~ ' + maxScroll + ' : ' + scrollAmt);
      if (minScroll <= scrollAmt && scrollAmt < maxScroll) {
        $selector.addClass('show');
      } 
    //   else {
    //     $selector.removeClass('show');
    //   }
    });
  };


  $('#gnb > ul > li > a').on('mouseenter focus', function () {
    $('#header').addClass('on');
  });
  
  $('#header').on('mouseleave', function () {
    $('#header').removeClass('on');
  }); 


  var $imgList = $('#jewerly_wrap>li');			   	// bgwrap div 안에 있는 div 자식들을 가져옴
	var nImgCount = $imgList.children().length;		// 위에서 가져온 div 자식들의 개수
	var nDuration = 1000;						             	// 이미지를 변경할 시간 (3000 = 3초)
	var bAuto = true;								              // 자동으로 변경할 지 여부
	var nIndex = 0;								              	// 변경할 이미지의 Index
	
	if(bAuto == true) {
		setInterval(autoSlide, nDuration);			    // Javascript setInterval 함수 호출
	}
	
	function autoSlide() {
		var next = (++nIndex % nImgCount);
		$($imgList.get(next - 1)).css({'display':'none'})
		$($imgList.get(next)).css({'display':'block'})
  }
  




  $(document).ready(function () {  
  $("#menuview").on("click", function () {
    $("#m_menu").css("display", "block");
  });

  $(".close").on("click", function () {
      $("#m_menu").css("display", "none");
    });
    

  window.onresize = function () {
        if ($(window).width() > 1024) {
          $("#m_menu").css("display", "none");
        } 
      };
});


