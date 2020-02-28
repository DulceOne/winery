$(document).ready(() => {
   
   const keyPages = {
      'index.php':'#home',
      'about.php': '#about',
      'fleet.php': '#fleet',
      'tours.php': '#tours',
      'configurator.php': '#configurator'
   }

   const currentUrl = document.location.pathname;
   drowLineToMenuItem();
	if(currentUrl == "/winery/index.php" || currentUrl == "/winery") { //toDo когда зальем на сервак нужно будет сменить домен стринг
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
      const locations = currentUrl.split('/');
      const page = locations[locations.length-1]
      $(keyPages[page]).addClass('active');
   }


   /// CONFIGURATOR
   $("#steper").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft"
  });
  

})

