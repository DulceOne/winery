$(document).ready(() => {
   
   const keyPages = {
      'index.php':'#home',
      'about.php': '#about',
      'fleet.php': '#fleet',
      'tours.php': '#tours',
      'configurator.php': '#configurator'
   }

   //settings
   const host = 'http://192.168.0.107:8000/';
   const prefix = 'api';
   const fullURL = host+prefix;
   const currentUrl = document.location.pathname;
   const googleMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';
   const googleMapApiKey = 'AIzaSyBaLQk4NkHI501VkJgj5g3KJXO1TZMlLvA';
   const win_tours = [];
   const win_cars = [];
   let fullPrice = 0;

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


//   $('.template').parents('.owl-item').css({'display': 'none'});

  //get all Tours
   getAllToursInConfigurato();
   async function getAllToursInConfigurato () {
      const tours =  await get('/winery-tours');
      const selected_tours = localStorage.getItem('wine_tours') || []
      console.log(tours)
      for(tour of tours) {
         const template = $('.steper-tours .template').clone();      
         const item = template.removeClass('template');
         item.find('.head').html(tour.name);
         item.find('.desc').html(tour.description);
         item.find('.wrapper img').attr('src',host+tour.photos[0]['configurator-card']);
         item.attr('data-id', tour.id);
         for(stour of selected_tours) {
            if(stour == tour.id)
               item.addClass('selected');
         }
         $('.steper-tours').append(item);

         item.find('.btn.select').click(function()  {
            const id = $(this).parents('.item').data('id');
            selectTour(id)
         });

         item.find('.close').click(function() {
            const id = $(this).parents('.item').data('id');
            removeTour(id)
         })
      }
      $("#step-tours-slider").owlCarousel(
         {
             items: 4,
             margin: 0,
             dots: true,
             autoplay: true,
            //  loop: true,
             lazyLoad: true
         }
     );

       //hide template item in slider
       $('#step-tours-slider .owl-item')[0].remove()

   }


   // step 1 select tours

   function selectTour(id) {
      const tours = JSON.parse(localStorage.getItem('wine_tours')) || [];

      const tour_exist = tours.find(v => v == id);
      if(!tour_exist) {
         tours.push(id);
         const items = $('.steper-tours .item');
         $(items).each(function () {
            if($(this).data('id') == id) {
               $(this).addClass('selected');
            }
         })
      }

      localStorage.setItem('wine_tours', JSON.stringify(tours));
   }

   function removeTour(id) {
      const items = $('.steper-tours .item');
      let tours = JSON.parse(localStorage.getItem('wine_tours'));

      tours = tours.filter(tId => tId != id);
      $(items).each(function () {
         if($(this).data('id') == id) {
            $(this).removeClass('selected');
         }
      })
      localStorage.setItem('wine_tours', JSON.stringify(tours));

   }


   getAllCarsGroupConfigurator();
   async function getAllCarsGroupConfigurator() {
      const cars =  await get('/car-groups');

      for(car of cars) {
         const template = $('.steper-cars .template').clone();
         const item = template.removeClass('template');
         item.find('.head').html(car.name);
         item.find('.desc').html(car.description);
         item.find('.wrapper img').attr('src',host+car.photo['configurator-card']);
         item.attr('data-id', car.id);
         $('.steper-cars').append(item);

         item.find('.btn.select').click(function()  {
            const id = $(this).parents('.item').data('id');
            get(`/car-groups/${id}`).then((cars) => {
               $("#steper").steps('next');
               drawCars(cars)
            })
         });
      }

      $("#step-cars-slider").owlCarousel(
         {
             items: 4,
             margin: 0,
             dots: true,
             autoplay: true,
            //  loop: true,
             lazyLoad: true
         }
     );

       //hide template item in slider
       console.log($('.owl-item'))
      $('#step-cars-slider .owl-item')[0].remove()
   }


   function drawCars(cars) {
      $('.fourth-step .item').not('.template').remove();
      for(car of cars) {
         const template = $('.fourth-step .template').clone();
         const item = template.removeClass('template');
         item.find('.galery img').attr('src', host + car.photos[0]['configurator-card']);
         // let index = 0;
         // setInterval(function() {
         //    item.find('.galery img').attr('src', host + car.photos[index]['configurator-card']);
         //    index++;
         // }, 2000)
         item.find('.info .title').html(car.name);
         item.find('.desc').html(car.description);
         item.attr('data-id', car.id);
         $('.fourth-step').append(item);

         item.find('.btn.select').click(function () {
            const id = $(this).parents('.item').data('id');
            localStorage.setItem('car_id', JSON.stringify(id));
            $("#steper").steps('next');
            getCarAndTour();
         })
      }

      $("#step-car-slider").owlCarousel(
         {
             items: 1,
             margin: 0,
             dots: true,
             autoplay: true,
             loop: true,
             lazyLoad: true
         }
     );

       //hide template item in slider
       console.log($('.owl-item'))
      $('#step-car-slider .owl-item')[0].css({'display':'none'})
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
            let option = `<option value='${getZerro(index+1)}'>${elem}</option>`;
          $('.scond-step-form #month').append(option);
      })
    }
    initMounth()

    $('.scond-step-form #month').change(function () {
      const month = $(this).val();
      const days = daysInMonth(month);
      console.log(days);
      for(i=1; i<days; i++) {
         let option = `<option value='${getZerro(i)}'>${getZerro(i)}</option>`;
         $('.scond-step-form #date').append(option);
      }
    })


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


   ///step 2 save data
   const step2 = $('.scond-step-form');
   $(step2).find('.btn').click(function() {
      const year = new Date().getFullYear();
      const month = step2.find('#month').val();
      const day = step2.find('#date').val();
      const hour = step2.find('#hour').val();
      const minute = step2.find('#minute').val();
      const address = step2.find('#step_adress').val();
      const wishes = step2.find('#wishes').val();
      const map = $('.second-step .map img').attr('src');

      if(month && day && hour && minute && address) {
         const datetime = `${year}-${month}-${day} ${hour}:${minute}`
         localStorage.setItem('date', day +' '+ month)
         localStorage.setItem('time', hour +':'+ minute)
         localStorage.setItem('datetime', datetime);
         localStorage.setItem('address', address);
         localStorage.setItem('map', map);
         localStorage.setItem('wishes', wishes);

         $("#steper").steps('next');

      }
      else {
         alert('Не все поля заполнены');
      }
   })


  function getCarAndTour() {
      findTour();
      wishlistMapDraw();
      findCar();
   }

   ///step 5 
   async function findTour () {
      const tours =  await get('/winery-tours');
      wine_tours = JSON.parse(localStorage.getItem('wine_tours'));
      const tour = tours.find(t => t.id == wine_tours[0]);
      const template = $('.steper-selected .template').clone();      
      const item = template.removeClass('template');
      item.find('.head').html(tour.name);
      item.find('.desc').html(tour.description);
      item.find('.wrapper img').attr('src',host+tour.photos[0]['configurator-card']);
      item.find('.price').html(`${tour.price}$`);
      item.attr('data-id', tour.id);
      $('.steper-selected .form').before(item);

      setTotalPrice(tour.price)


      item.find('.btn.change').click(function()  {
         $("#steper").steps('setStep', 0)
      });
   }

   async function wishlistMapDraw() {
      const address = localStorage.getItem('address');
      const price = await get(`/distance?target=${address}`);
      const map = localStorage.getItem('map');
      const date = localStorage.getItem('date');
      const time = localStorage.getItem('time');
      const wishes = localStorage.getItem('wishes');

      const template = $('.steper-selected .template').clone();      
      const item = template.removeClass('template');
      item.find('.head').html(address);
      item.find('.desc').html(
         `Address: ${address}
         <br>
         Date: ${date}
         <br>
         Time: ${time}
         <br>
         Wishes: ${wishes}
      `);
      item.find('.wrapper img').attr('src',map);
      item.find('.price').html(`${price.price}$`);
      item.attr('data-id', car.id);
      $('.steper-selected .form').before(item);
      setTotalPrice(price.price)

      item.find('.btn.change').click(function()  {
         $("#steper").steps('setStep', 1)
      });

   }

   
   async function findCar () {
      const cars =  await get('/cars');

      car_id = JSON.parse(localStorage.getItem('car_id'));
      const car = cars.data.find(t => t.id == car_id);
      const template = $('.steper-selected .template').clone();      
      const item = template.removeClass('template');
      item.find('.head').html(car.name);
      item.find('.desc').html(car.description);
      item.find('.price').html(`${car.price}$`);
      item.find('.wrapper img').attr('src',host+car.photos[0]['configurator-card']);

      item.attr('data-id', car.id);
      $('.steper-selected .form').before(item);

      item.find('.btn.change').click(function()  {
         $("#steper").steps('setStep', 3)
      });

      setTotalPrice(car.price)
      console.log(item)
   }

   function getZerro(number) {
      return number > 9 ? number: '0' + number;
   }

   const step5Form = $('.steper-selected .item.form');
   step5Form.find('.btn').click(() => {
      body = {
         fullName: step5Form.find('#name').val(),
         phoneNumber: step5Form.find('#phone').val(),
         email: step5Form.find('#email').val(),
         addressWishes: localStorage.getItem('wishes'),
         wishes: step5Form.find('#wishes').val(),
         address: localStorage.getItem('address'),
         datetime: localStorage.getItem('datetime')+':00',
         car_id: localStorage.getItem('car_id'),
         wine_tours_ids: JSON.parse(localStorage.getItem('wine_tours')),
         address_price: '123'
      }
      post('/place-an-order', body).then(res => {
         console.log(res)
      })
   })



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

   function setTotalPrice(price) {
      let oldPrice = $('.steper-selected form .price span');
      fullPrice += price;
      oldPrice.html(fullPrice);
   
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


    //go  to spec step "$("#steper").steps('setStep', step)"
    $.fn.steps.setStep = function (step) {
      var currentIndex = $(this).steps('getCurrentIndex');
      for(var i = 0; i < Math.abs(step - currentIndex); i++){
        if(step > currentIndex) {
          $(this).steps('next');
        }
        else{
          $(this).steps('previous');
        }
      } 
    };

})

