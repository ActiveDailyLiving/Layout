$(function() {
    $("#menu_icon").click(function() {
        $(".menu_icon").toggleClass("close");
        $(".menu").toggleClass( "active" );
        $(".menu_overlay").toggleClass("show");
        $(".main_wrapper").toggleClass("overflow");
      });
      $(".video_wrapper").click(function(){
        $(".video_modal").addClass("opened");
        $(".modal_overlay").addClass("show");
      });
      $(".close_icon").click(function(){
        $(".video_modal").removeClass("opened");
        $(".modal_overlay").removeClass("show");
      });
      $("#select_result").click(function(){
        $(".custom_select").addClass("active");
      });
      $("#select_result").change(function(){
        $(".custom_select").removeClass("active");
      });
      $(document).on('click', function (e) {
        if (!$(e.target).is('#select_result'))
        $(".custom_select").removeClass("active");
    });
});