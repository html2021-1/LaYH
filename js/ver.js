$(document).ready(function () {
    var scrollY;

    setTimeout(function () {
        $('#header h1').addClass('fade');
        $('#nav').addClass('down');
    }, 1500);

    $(window).on('scroll', function () {
        scrollY = $(window).scrollTop() + $(window).height();

        console.log(scrollY);
        if (scrollY > $('#container').offset().top) {
            $('#nav').removeClass('down');
        } else {
            $('#nav').addClass('down');
        }
    });
    
    $('#nav').on({
        'mouseenter': function () {
            $('#nav').addClass('down');
        },
        'mouseleave': function () {
            if (scrollY > $('#container').offset().top) {
                $('#nav').removeClass('down');
            }
        }
    });

    // .papaer에 .updown을 추가해서 위, 아래로 움직이는 반복애니메이션 적용
    $('#introWrapBefore .paper').addClass('updown');
    // 제이쿼리UI draggable() 메서드로 종이만 드래그 됨
    $('#introWrapBefore .paper').draggable({
        containment: '#introduce',  //부모 영역에서만 드래그 되도록 제한
        axis: 'y',   // y축 방향으로 만 드래그 가능 옵션 추가
        scroll: false, //스크롤바 생성 제한
        snap: true,   // snap을 통해 좀더 부드럽게 표현
        drag: function( event, ui ) {  //drag이벤트가 일어날 경우 종이 위, 아래로 움직이는 클래스는 제거
            $(this).removeClass('updown');
        },
        stop: function( event, ui ) { //drag를 멈추었을때 이벤트로 숨겨놓은 2번째 .intro_wrap을 보여지게 처리
            $(this).closest('.intro_wrap').stop().fadeOut().next().stop().fadeIn();
        }
    });
});
