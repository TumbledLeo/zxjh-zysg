$(function(){
  var judge = true;
  $('.p a').click(function(){
    if(judge){
      $(this).siblings('.show').fadeIn();
      $(this).find('.play').attr("src","images/join33.png");
      judge = false;
    }else{
        $(this).siblings('.show').fadeOut();
        $(this).find('.play').attr("src","images/join3.png");
        judge = true;
    } 
  });
});

$(function(){
  var judge = true;
  $('.p a').click(function(){
    if(judge){
      $(this).siblings('.show').fadeIn();
      $(this).find('.play').attr("src","images/join33.png");
      judge = false;
    }else{
        $(this).siblings('.show').fadeOut();
        $(this).find('.play').attr("src","images/join3.png");
        judge = true;
    } 
  });
});