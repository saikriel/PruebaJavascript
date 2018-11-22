$(function (){


    $(".board").on("click" , '.posted__like', function(){
        counter = $(this).siblings('.posted__counter').text();
          counter = parseInt(counter);
          $(this).siblings('.posted__counter').text(counter + 1)
      });
  

    $(".myform").on("submit" , function(event){
        event.preventDefault();
        
        event.stopPropagation();
        var text = $(".post__text").val();
    
     

        $(".board").append(
            '<div class="posted">'
            + '<div class="media">'
            + '<div class="media-left">'
            +  '<img class="media-object author" src="assets/images/default.png" alt="">'
            + '</div>'
            + '<div class="media-body">'
            + '<a class="close"><i class="far fa-times-circle"></i></a>'
            + '<h3 class="media-heading">Pusheen</h3>'
            + text
            +'<br>'
            +'<div id="counter">'
            + '<span class="posted__counter">0</span>'
            + ' <a class="posted__like"><i class="far fa-heart"></i></a>'
            + '</div>' 
            +'</div>'   
            + '</div>'
        )
        
       $(".myform").get(0).reset();
    });
    $(".board").on("click" ,  ".close" , function (){
        $(this).parent().parent().parent().fadeOut(900);
    });

    $(".board").on( "click", ".posted__like .fa-heart" , function (){
        event.preventDefault();
        $(this).addClass("posted__likered");
    });
   
})