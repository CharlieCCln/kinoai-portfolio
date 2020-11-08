$(document).ready(function(){

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
  });

  $("#tabs").tabs();

  $("#frame").selectmenu();
  $("#ratio").selectmenu({
    change: function( event, data ) {
      if(data.item.value == "original-ratio" || data.item.value == "169"){
        $(".video").css("background-size", "auto 100%");
      }
      if(data.item.value == "half"){
        $(".video").css("background-size", "50% 100%");
      }
      if(data.item.value == "twice"){
        $(".video").css("background-size", "100% 50%");
      }
      if(data.item.value == "43"){
        $(".video").css("background-size", "75% 100%");
      }
      if(data.item.value == "4k2k"){
        $(".video").css("background-size", "100% 90%");
      }
    }
  });

  $('.toggle').on('click',function(){
    $(this).toggleClass('on');
  })

})
