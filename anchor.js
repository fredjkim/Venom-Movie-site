function scrollToAnchor(aid){
    var aTag = $("h1[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'smooth');
}

$("#link1").click(function() {
   scrollToAnchor('id1');
})

$("#link2").click(function() {
   scrollToAnchor('id2');
})

$("#link3").click(function() {
   scrollToAnchor('id3');
});
