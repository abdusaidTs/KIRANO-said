$(function(){
   
   ///////menu///////////
   $('.but').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('but_active');
    $('.menu').toggleClass('menu_active');
    $('.content, .content_two, .content_team, .content_service, .content_work, .content_work-two').toggleClass('content_active, content_two_active, content_team_active, content_service_active, content_work_active, content_work-two_active');
    
    /////////меняет цвет на синий///////////////
    
    if($('.slider__link').attr('style'))
    $('.slider__link').removeAttr('style');
      else
    $('.slider__link').css('background', '#0000ff')
    
    if($('.slider__text span').attr('style'))
    $('.slider__text span').removeAttr('style');
      else
    $('.slider__text span').css('background', '#0000ff')
  })
  
  
  
  //////////////slider/////////////////
 
  $('.slider__link').on('click', function(e) {
    e.preventDefault();
    $('.slider__nav  .slider__link').removeClass('slider__link--active');
  $(this).addClass("slider__link--active");
  $('.slider').eq($(this).index()).addClass('slider--active').siblings().removeClass('slider--active');
  
  
});
})