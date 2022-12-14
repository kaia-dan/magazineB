 //1.스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 2.슬라이드
$(function() {  //$(function() {});  jquery를 호출하겠다.
    $(".visual_wrap .visual_inner .visual_slick").slick({  //$("적용해줄 클래스명").slick- 선택한 클래스에 slick을 적용하겠다
        arrows: false, //화살표 사용안함
        dots: false, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 5000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 

// .3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 