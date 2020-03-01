$(document).ready(() => {
   
   const keyPages = {
      'index.php':'#home',
      'about.php': '#about',
      'fleet.php': '#fleet',
      'tours.php': '#tours',
      'configurator.php': '#configurator'
   }

   //settings
   const host = 'http://9dd9969c.ngrok.io/';
   const prefix = 'api';
   const fullURL = host+prefix;
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

   //Home contacts send
   const homeForm = $('.home-contacts-form')
   homeForm.find('.btn').click(() => {
      const fullName = homeForm.find('#name').val()
      const phoneNumber = homeForm.find('#phone').val()
      const email = homeForm.find('#email').val()
      const selectedTour = homeForm.find('#selectedTour').val()
      const question = homeForm.find('#question').val()
      const body = {
         fullName,
         phoneNumber,
         email,
         selectedTour,
         question
      }
      console.log(body)
      if(fullName && phoneNumber && email && selectedTour && question) {
        const req = post('/contact',body);
        console.log(req);
        alert("contact form sending")
      }
      else {
         alert("All field required")
      }
   })



   /// CONFIGURATOR
   $("#steper").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "fade"
  });


  //get all Tours
   getAllToursInConfigurato();
   async function getAllToursInConfigurato () {
      const tours =  await get('/winery-tours');
      const template = $('.steper-tours .template').clone();
      const item = template.removeClass('template');
      for(tour of tours) {
         item.find('.head').html(tour.name);
         item.find('.desc').html(tour.description);
         item.find('img').attr('src',host+tour.photos[0].default);
         item.attr('data-id', tour.id);
         $('.steper-tours').append(item);
      }
   }

   getAllTours();
   async function getAllTours () {
      const tours =  await get('/winery-tours');
      const template = $('.tours .items .template').clone();
      const item = template.removeClass('template');
      for(tour of tours) {
         item.find('.title').html(tour.name);
         item.find('.desc+').html(tour.description);
         item.find('img').attr('src',host+tour.photos[0].default);
         item.attr('data-id', tour.id);
         $('.tours .items').append(item);
      }
   }


   // http methods
   function post(url, data) {
      return new Promise((resolve, reject) => {
         $.ajax({
           url: fullURL+url,
           type: 'POST',
           data,
           success: function(data) {
             resolve(data)
           },
           error: function(error) {
             reject(error)
           },
         })
       })
   }
  
   function get(url) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: fullURL+url,
          type: 'GET',
          success: function(data) {
            resolve(data)
          },
          error: function(error) {
            reject(error)
          },
        })
      })
    }

})

