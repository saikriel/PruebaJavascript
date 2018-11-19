$(function (){
    var author = $("#author").on("change" , function(){
        var auth = "assets/images/" + $(this).val()
        $(".post__author .post__author--image").attr("src" , auth)
    });

    $(".myform").on("submit" , function(event){
        var text = $(".post__text").val();
        var img = $(".post__author--image").val();
        event.preventDefault();
        $(".board").append(
            '<div class="posted">'
            + '<div class="media">'
            + '<div class="media-left">'
            + img
            + '</div>'
            + '<div class="media-body">'
            + '<h3 class="media-heading">Pusheen</h3>'
            + text
            + '</div>'    
            + '</div>'
        //    '<div class="posted">'
          //  +'<div class="post__author"><img'
            //+'</div>'
            //+ text
            //+'</div>'
        )
    });

})