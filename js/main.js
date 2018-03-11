function films(){
    $(".gallery").css("display","grid");
    $(".gallery__elem").css("transition","1s");
    setTimeout(() => {
        $(".gallery").css("height","100%");
        $(".gallery").css("top","0%");
    }, 2);
    setTimeout(() => {
        $(".gallery").css("min-height","580px");
    }, 300);
    setTimeout(() => {
        $(".main__films").css("opacity","0");
        $(".main__text").css("opacity","0");
    }, 100);
    setTimeout(() => {
        $(".gallery__elem").css("opacity","1");
    }, 500);
    setTimeout(() => {
        $(".main__films").css("display","none");
        $(".main__text").css("display","none");

    }, 1000);
}


function films__exit(){
    $(".gallery").css("height","0%");
    $(".gallery").css("top","55%");
    $(".gallery__elem").css("transition","0.3s");
    setTimeout(() => {
        $(".gallery").css("min-height","0");
        $(".gallery__elem").css("opacity","0");
    }, 2);
    setTimeout(() => {
        $(".main__films").css("opacity","1");
        $(".main__text").css("opacity","1");
    }, 100);
    setTimeout(() => {
        $(".gallery").css("display","none");
    }, 700);
    setTimeout(() => {
        $(".main__films").css("display","grid");
        $(".main__text").css("display","grid");
    }, 1);
}

function news(){
    $(".news").css("top","15%");
}