/*스크롤이 되면 헤더 배경색이 들어감*/
$(window).scroll(function(){
  $('#header_wrap').addClass('scroll');
  $('header h1 a span').css('background-image','url(./img/apple-touch-icon_black.svg)');
  if($(window).scrollTop() == 0){
    $('#header_wrap').removeClass('scroll');
    $('header h1 a span').css('background-image','url(./img/apple-touch-icon.svg)');
  }
});
//scrollTop()  -스크롤바 위치를 알아오거나 정함



/* 모바일 상태에서 햄버거 버튼을 누르면 메뉴가 보인다 */
$('.m_menuBtn').click(function(){
  $('.m_menuBtn').toggleClass('on');

  if($(this).hasClass('on')){
    $('.menu_container').fadeIn();
    $('body').css({'overflow':'hidden'})
  } else {
    $('.menu_container').fadeOut();
    $('body').css({'overflow':'auto'})
  }
 

});

$(window).resize(function(){
  let winW =  $(window).width(); 

  if( winW > 1023 &&  $('.menu_conatainer').is(':hidden')){
   $('.menu_conatainer').removeAttr('style');
  }
});