$( document ).ready(function() {
    $('#year').text(new Date().getFullYear());
    $(".listado img").on("click",function(){
        var url=".";
        if(document.location.href.indexOf("index.html")>-1){
            url+="/views";
        }
        document.location.replace(url+"/pelicula.html");
    });
});