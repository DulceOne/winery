$(document).ready(() => {
	

	const currentUrl = document.location.href;
	if(currentUrl.pathname == "/winery/index.php" || "/winery") {
		$("header nav .scollTo").each(e => {
			$(e).attr("href").replace(/index.php/g,'')
		})
	}

	console.log('ready')
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
})

