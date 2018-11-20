$(function (){
    $(".board").on("click", ".fa-heart", function (){
        counter = 0 ; 
        counter = $(".posted__counter").text();
        counter= parseInt(counter);
        $(".posted__counter").text(counter + 1);
        event.stopPropagation();
    });

    $(".myform").on("submit" , function(event){
        event.preventDefault();
        event.stopPropagation();
        var text = $(".post__text").val();
        
        $(".board").append(
            '<div class="posted">'
            + '<div class="media">'
            + '<div class="media-left">'
            +  '<img class="media-object author" src="assets/images/author1.jpeg" alt="">'
            + '</div>'
            + '<div class="media-body">'
            + '<a class="close"><i class="far fa-times-circle"></i></a>'
            + '<h3 class="media-heading">Pusheen</h3>'
            + text
            +'<br>'
            + '<span class="posted__counter">0</span>'
            + ' <a class="posted__like"><i class="far fa-heart"></i></a>'
            + '</div>'    
            + '</div>'
        )
    });
    $(".board").on("click" ,  ".close" , function (){
        $(this).parent().parent().parent().fadeOut(900);
    });

    $(".board").on( "click", ".posted__like .fa-heart" , function (){
        event.preventDefault();
        $(this).toggleClass("posted__likered");
    });

    

})