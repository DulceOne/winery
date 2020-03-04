$(document).ready(() => {
   
   const keyPages = {
      'index.php':'#home',
      'about.php': '#about',
      'fleet.php': '#fleet',
      'tours.php': '#tours',
      'configurator.php': '#configurator'
   }

   //settings
   const host = 'http://192.168.0.101:8000/';
   const prefix = 'api';
   const fullURL = host+prefix;
   const currentUrl = document.location.pathname;
   const googleMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';
   const googleMapApiKey = 'AIzaSyBaLQk4NkHI501VkJgj5g3KJXO1TZMlLvA';

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
      const body = {
         fullName: homeForm.find('#name').val(),
         phoneNumber: homeForm.find('#phone').val(),
         email: homeForm.find('#email').val(),
         selectedTour: homeForm.find('#selectedTour').val(),
         question: homeForm.find('#question').val()
      }
      console.log(body)
      if(body.fullName && body.phoneNumber && body.email && body.selectedTour && body.question) {
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
         item.find('img').attr('src',host+tour.photos[0]['configurator-card']);
         item.attr('data-id', tour.id);
         $('.steper-tours').append(item);
      }
   }

   // getAllTours();
   // async function getAllTours () {
   //    const tours =  await get('/winery-tours');
   //    const template = $('.tours .items .template').clone();
   //    const item = template.removeClass('template');
   //    for(tour of tours) {
   //       item.find('.title').html(tour.name);
   //       item.find('.desc+').html(tour.description);
   //       item.find('img').attr('src',host+tour.photos[0].default);
   //       item.attr('data-id', tour.id);
   //       $('.tours .items').append(item);
   //    }
   // }

   getAllCarsGroupConfigurator();
   async function getAllCarsGroupConfigurator() {
      const cars =  await get('/car-groups');
      const template = $('.steper-cars .template').clone();
      const item = template.removeClass('template');
      console.log(item);
      for(car of cars) {
         item.find('.head').html(car.name);
         item.find('.desc').html(car.description);
         item.find('img').attr('src',host+car.photo['configurator-card']);
         item.attr('data-id', car.id);
         $('.steper-cars').append(item);
      }
   }

   //Draw Map
   $('#step_adress').on('input',adressChanges);
   function adressChanges() {
      // const [city, street] = $(this).val().split(',');
      const value = $(this).val();

      if(value.length>3) {
         $.ajax({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${googleMapApiKey}`,
            type: 'GET',
         }).then(result => {
            const {lat, lng} = result.results[0].geometry.location;
            const map = $('.second-step .map img');
            map.attr('src',`${googleMapUrl}?center=${value},NY&zoom=13&size=600x300&maptype=roadmap
            &markers=color:red|${lat},${lng}&
            &key=${googleMapApiKey}`);
         })
      }
   }

   function initMounth() {
      var month = ["January","February","March","April","May","June","July",
      "August","September","October","November","December"].forEach((elem, index) => {
            let option = `<option value='${index+1}'>${elem}</option>`;
          $('.scond-step-form #month').append(option);
      })
    }
    initMounth()

    $('.scond-step-form #month').change(function () {
      const month = $(this).val();
      const days = daysInMonth(month);
      console.log(days);
      for(i=1; i<days; i++) {
         let option = `<option value='${i}'>${i}</option>`;
         $('.scond-step-form #date').append(option);
      }
    })

    function initDate() {
      
    }

    function initTime() {
      const hour = 24;
      const minute = 60;
      for(i=0; i< hour; i++) {
         const option = `<option value='${getZerro(i)}'>${getZerro(i)}</option>`;
         $('.scond-step-form #hour').append(option)
      }

      for(i=1; i< minute; i++) {
         const option = `<option value='${getZerro(i)}'>${getZerro(i)}</option>`;
         $('.scond-step-form #minute').append(option);
      }
    }
    initTime();

    function daysInMonth (month) {
      const year = new Date().getFullYear();
      return new Date(year, month, 0).getDate();
   }

   ///step 2
   $('.scond-step-form .btn').click(function() {
      const 
   })
  

   function getZerro(number) {
      return number > 9 ? number: '0' + number;
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

