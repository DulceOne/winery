$(document).ready(() => {
	

   const currentUrl = document.location;
   console.log(currentUrl);
   drowLineToMenuItem();
	if(currentUrl.pathname == "/winery/index.php" || currentUrl.pathname == "/winery") { //toDo когда зальем на сервак нужно будет сменить домен стринг
		$("header nav .scollTo").each( function() {
			let temp = $(this).attr("href");
			temp = temp.replace(/index.php/g,'')
			$(this).attr("href", temp)
		})
   }


	$('a.scollTo').on('click', function(e){
        var $anchor = $(this).attr("href");
        var $hrefStart = $anchor.substr(0, 1);

        if ( $hrefStart == "#" ) {

           $('html,body').animate({
               scrollTop: $($anchor).offset().top
           }, 1500, 'easeInOutExpo');

           e.preventDefault(); 
        } else {
           window.location.href = $anchor;
        }
     });

   function drowLineToMenuItem() {
      console.log(currentUrl)
      switch(currentUrl.pathname) {
         case '/winery/index.php':
         case '/winery/':
            $("#home").addClass('active');
         break;

         case '/winery/about.php':
            $("#about").addClass('active');
         break;

         case '/winery/tours.php':
            $("#tours").addClass('active');
         break;

         case '/winery/fleet.php':
            $("#fleet").addClass('active');
         break;

         case '/winery/configurator.php':
            $("#configurator").addClass('active');
         break;
      }
   }

})

