<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<? include './shared/links.php'?>
</head>
<body>
	<section class="full-wrapper">
		<? include './shared/header.php'?>
		<div class="configurator">
			<div id="steper">
				<h3></h3>
				<section id="first-step">
					<div class="header">
						<div class="title">
							select you tour
							<div class="ui-line orange"></div>
						</div>
						<div class="controls">
							<img src="./assets/image/home/arrow_left.png" alt="">
							<img src="./assets/image/home/arrow_left.png" style="transform: rotate(180deg);">
						</div>
						<div class="current-page">Step 1 with 5 </div>
					</div>
					<div class="steper-tours">

						<div class="item template">
							<img class="close " src="./assets/image/configurator/close.svg" alt="">
							<div class="wrapper">
								<img src="./assets/image/configurator/step_1_tour.png" alt="">
								<div class="info">
									<div class="head">Wölffer Estate</div>
									<div class="desc">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Nunc ultricies cursus
										lacus, ipsum eget morbi magna montes,
										et. Aliquet curabitur aenean cursus
										in. Arcu ut pulvinar elit arcu
										imperdiet sed vel sit. Semper
										posuere tristique sit metus. Semper
										posuere tristique sit metus. 
									</div>
								</div>
							</div>
							<div class="controls">
								<div class="btn white">more</div>
								<div class="btn select">select</div>
							</div>
						</div>

					</div>
				</section>
				<h3></h3>
				<section id="second-step">
					<div class="second-step">
					<div class="header">
						<div class="title">
							select you point, date and time
							<div class="ui-line orange"></div>
						</div>
						<div class="current-page">Step 2 with 5 </div>
					</div>
						<div class="map">
							<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
								&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&
								&key=AIzaSyBaLQk4NkHI501VkJgj5g3KJXO1TZMlLvA">
						</div>
						<form class="scond-step-form">
							<div class="date-block">
								<div class="item">
									<div class="title">Month</div>
									<div class="wrapper">
										<select id="month">
										</select>  
									</div>
								</div>

								<div class="item">
									<div class="title">Date</div>
									<div class="wrapper">
										<select id="date">
										</select>  
									</div>
								</div>

								<div class="item">
									<div class="title">Hour</div>
									<div class="wrapper">
										<select id="hour">
										</select>  
									</div>
								</div>

								<div class="item">
									<div class="title">Minute</div>
									<div class="wrapper">
										<select id="minute">
										</select>  
									</div>
								</div>

							</div>
							<div class="item">
								<div class="title">Adress</div>
								<input type="text" placeholder="Brooklyn, NY 11213" id="step_adress">
							</div>
							<div class="item">
								<div class="title">Wishes</div>
								<input type="text" id="wishes">
							</div>

							<div class="btn">submit</div>
						</form>
					</div>
				</section>
				<h3></h3>
				<section id="third-step">
					<div class="header">
						<div class="title">
							select you class Car
							<div class="ui-line orange"></div>
						</div>
						<div class="controls">
							<img src="./assets/image/home/arrow_left.png" alt="">
							<img src="./assets/image/home/arrow_left.png" style="transform: rotate(180deg);">
						</div>
						<div class="current-page">Step 3 with 5 </div>
					</div>
					<div class="steper-cars">
						

						
						<div class="item template">
							<img class="close " src="./assets/image/configurator/close.svg" alt="">
							<div class="wrapper">
								<img src="./assets/image/configurator/step_3_car.png" alt="">
								<div class="info">
									<div class="head">sedans</div>
									<div class="desc">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Nunc ultricies cursus
										lacus, ipsum eget morbi magna montes,
										et. Aliquet curabitur aenean cursus
										in. Arcu ut pulvinar elit arcu
										imperdiet sed vel sit. Semper
										posuere tristique sit metus. Semper
										posuere tristique sit metus. 
									</div>
								</div>
							</div>
							<div class="controls">
								<div class="btn white">more</div>
								<div class="btn select">select</div>
							</div>
						</div>

					</div>
				</section>
				<h3></h3>
				<section id="fourth-step">
					<div class="fourth-step">

						<div class="header">
							<div class="title">
								select you class Car
								<div class="ui-line orange"></div>
							</div>
							<div class="controls">
								<img src="./assets/image/home/arrow_left.png" alt="">
								<img src="./assets/image/home/arrow_left.png" style="transform: rotate(180deg);">
							</div>
							<div class="current-page">Step 4 with 5 </div>
						</div>
						<div class="item template">
							<div class="galery">
								<img src="./assets/image/configurator/car.png" alt="">
							</div>
							<div class="info">
								<div class="title">2016 MERCEDES-BENZ S-CLASS</div>
								<div class="desc">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolore impedit deleniti laboriosam sapiente sequi, doloribus voluptas quaerat mollitia? Eaque, accusamus repellat quasi assumenda praesentium cumque dolore quo reiciendis esse.Deserunt voluptatibus illo ducimus nihil itaque enim modi nulla, deleniti, tenetur animi obcaecati? Sequi illo velit veniam enim porro quisquam eius, at modi provident quibusdam ab, repellendus, maxime corporis similique?
									<br><br>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque quas officiis dolorem fugiat, animi distinctio sapiente soluta suscipit! Earum modi sunt qui reiciendis, explicabo dolorem libero ratione debitis architecto!Ipsum libero consectetur expedita dolor, asperiores nobis quidem ut, vel nesciunt omnis fuga laboriosam iste quis! Quidem amet fugiat facere esse, voluptatum, ad minus repellendus veritatis illo exercitationem ullam cupiditate.
								</div>

								<div class="btns">
									<div class="btn">more</div>
									<div class="btn select">select</div>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
				<h3></h3>
				<section id="fifth-step">
					<div class="header">
						<div class="title">
							check wishlit wine tour
							<div class="ui-line orange"></div>
						</div>
						<div class="current-page">Step 5 with 5 </div>
					</div>
					<div class="steper-selected">

						<div class="item template">
							<div class="wrapper">
								<img src="./assets/image/configurator/step_3_car.png" alt="">
								<div class="info">
									<div class="head">sedans</div>
									<div class="desc">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Nunc ultricies cursus
										lacus, ipsum eget morbi magna montes,
										et. Aliquet curabitur aenean cursus
										in. Arcu ut pulvinar elit arcu
										imperdiet sed vel sit. Semper
										posuere tristique sit metus. Semper
										posuere tristique sit metus. 
									</div>
								</div>
							</div>
							<div class="controls">
								<div class="btn white">500$</div>
								<div class="btn change">Change</div>
							</div>
						</div>

						<div class="item form">
							<div class="item-title">write information</div>
							<div class="wrapper">
								<form>
									<div class="item-form">
										<div class="title">Name</div>
										<input type="text">
									</div>
									<div class="item-form">
										<div class="title">Phone</div>
										<input type="text">
									</div>
									<div class="item-form">
										<div class="title">E-mail</div>
										<input type="text">
									</div>
									<div class="item-form">
										<div class="title">Wishes</div>
										<textarea disabled>Lorem ipsum dolor sit amet, consectetur
										 adipisicing elit. Maiores sint porro ad odio quae repellat similique? Quaerat quia,
										  sit atque ex iusto, culpa fuga aliquid reprehenderit ipsum, ipsam alias? Non.
										</textarea>
									</div>
									<div class="price">total price <span>1800$</span</div>
								</form>
								</div>
								<div class="controls">
									<div class="btn">submit</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</section>
	<!-- <? include './shared/footer.php'?> -->

</body>
</html>