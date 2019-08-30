apos.define('ec-navigation-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
      self.play = function($widget, data, options) {
        
      console.log($widget.find("[data-ec-nav]"));
      $('.ec-nav .ec-nav-title').on('click', function(){
        console.log($(this).find("i").hasClass("fa-plus-circle"));
        if($(this).find("i").hasClass("fa-minus-circle")){
          $(".ec-nav-grand").collapse('hide');
          $(this).find("i").addClass("fa-plus-circle").removeClass("fa-minus-circle");
          }else{
            $(".ec-nav-grand").collapse('show');
            $(this).find("i").addClass("fa-minus-circle").removeClass("fa-plus-circle");
        }        
      });
      $('.ec-nav .ec-nav-grand')
       .on('shown.bs.collapse', function() {
                    $(this)
                        .parent()
                        .find(".fa-plus")
                        .removeClass("fa-plus")
                        .addClass("fa-minus");
                })
                .on('hidden.bs.collapse', function() {
                    $(this)
                        .parent()
                        .find(".fa-minus")
                        .removeClass("fa-minus")
                        .addClass("fa-plus");
                });
       
      


//      $widget.find('.ec-nav .has-grand .ec-nav-grand').hide();
      $widget.find("#sub-menu").on('change', function () {
        
        var url = $(this).val(); // get selected value
        
        if (url) { // require a URL
          window.location = url; // redirect
        }
        return false;
      });
    };
  }
});