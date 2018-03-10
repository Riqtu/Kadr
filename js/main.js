function films(){
    $(".gallery").css("display","grid");
    setTimeout(() => {
        $(".gallery").css("height","100%");
        $(".gallery").css("top","0%");
    }, 2);
    $(".main__films").css("transition","1s");
    $(".main__text").css("transition","1s");
    setTimeout(() => {
        $(".main__films").css("opacity","0");
        $(".main__text").css("opacity","0");
    }, 100);
    setTimeout(() => {
        $(".main__films").css("display","none");
        $(".main__text").css("display","none");
    }, 1000);
}