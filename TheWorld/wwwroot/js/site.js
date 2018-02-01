
(function () {
   //var ele = $("#username");
   // ele.text("hello");
   // $("#main").mouseenter(function () {
   //     this.style = "background-color:#888";
   // }).mouseleave(function () {
   //     this.style = "";
   //     });
   // $("ul.menu li a").on("click", function () {
   //     alert($(this).text());
   // })

   // var menuItems = $("ul.menu li a");
   // menuItems.on("click", function () {
   //     var me = $(this);
   //     alert(me.text());
   // });

    var $sideBarAndWrapper = $("#sidebar, #wrapper");
    var $icon = $("sideBarToggle i.fa");
    $('#sideBarToggle').on('click', function () {
        $sideBarAndWrapper.toggleClass("hide-sidebar");
        if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-chevron-left");
            $icon.addClass("fa-chevron-right");
        } else {
            $icon.addClass("fa-chevron-left");
            $icon.removeClass("fa-chevron-right");
        }
    });
})();
