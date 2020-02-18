<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Winery</title>
    <? include './shared/links.php'; ?>
</head>
<body>
<? include './shared/header.php'; ?>

<main>
    <section class="slide-section">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <button class="btn">configurate you tour</button>
    </section>

    <section class="informations">
        <div class="items">
            <div class="item" id="about">
                <div class="header">
                    <div class="title">
                        about us
                        <div class="ui-line orange"></div>
                    </div>
                    <div class="controls">
                        <img src="./assets/image/home/arrow_left.png" alt="">
                        <img src="./assets/image/home/arrow_left.png" style="transform: rotate(180deg);">
                    </div>
                </div>
                <div class="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda magni qui nobis placeat quae non quia iure omnis! Quasi, incidunt assumenda. Laborum neque tenetur eum nihil voluptatum. Amet, voluptates.Asperiores amet ea, officia mollitia, deleniti quia molestias exercitationem tempora, est placeat maxime. Molestiae quia placeat perferendis sed, pariatur recusandae et, illum temporibus reiciendis repudiandae vero, ratione cum iure vitae?
                    <br><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio veniam alias. Rerum cumque fuga aperiam sed quaerat quia dolorum dolore! Delectus, quasi minus maxime perferendis vero optio perspiciatis? Repellendus.
                    <br><br><br>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nihil maxime suscipit dolorum natus ipsum, ea aspernatur distinctio quasi ut. Provident soluta enim, illum culpa rerum veritatis! Ex, ullam tempora.Illum esse dolorem voluptatibus repudiandae natus a eum eaque incidunt tempore quae, similique molestiae cum velit aliquam sapiente odit debitis voluptatum, atque soluta culpa magnam laboriosam omnis nulla nihil. Pariatur?
                </div>

                <div class="galery">
                    <img class="full-size" src="./assets/image/home/galery_1.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_2.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_3.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_4.png" alt="">
                </div>
            </div>


            <div class="item second">
                <div class="header">
                    <div class="title">
                        Wölffer Estate
                        <div class="ui-line orange"></div>
                    </div>
                    <div class="controls">
                        <img src="./assets/image/home/arrow_left.png" alt="">
                        <img src="./assets/image/home/arrow_left.png" style="transform: rotate(180deg);">
                    </div>
                </div>

                <div class="galery">
                    <img class="full-size" src="./assets/image/home/galery_1.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_2.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_3.png" alt="">
                    <img class=small-size src="./assets/image/home/galery_4.png" alt="">
                </div>

                <div class="info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, illo numquam soluta eaque laborum nemo ipsam quia itaque in exercitationem sunt nesciunt odio at? Quidem nemo sunt vitae dolores est?
                    Eos ratione nam iusto repellat voluptatum quas eius nemo quidem aspernatur atque, accusamus ipsa dolor, deleniti soluta odit debitis consectetur! Itaque corrupti alias earum ipsum et laborum doloremque est natus!
                    Ab quos quasi cupiditate consequatur tenetur cum corrupti nulla? Sint, reprehenderit! Architecto aspernatur, vitae omnis blanditiis a aut facere consequuntur nisi fugit illum animi ut perspiciatis debitis placeat deleniti. Id.
                    <br><br><br>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quas qui exercitationem odit at ullam perferendis vitae eum accusantium dolorum. Quidem animi quaerat nam voluptas eum omnis facilis doloremque ab!
                    <button class="btn light">more info</button>
                </div>

            </div>

        </div>
    </section>

    <section class="contacts" id="contact">
        <div class="wrapper">
            <div class="form-wrap">
                <div class="title">
                    contaсt us 
                    <div class="ui-line white"></div>
                </div>
                <form action="">
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Phone">
                    <input type="text" placeholder="E-mail">
                    <input type="text" placeholder="Selected tour">
                    <input type="text" placeholder="You question?">

                    <button class="btn white">send</button>
                </form>
            </div>

            <div class="info">
                <div class="item">Tel: +1 (748) 1 111 11</div>
                <div class="item">E-mail: example@exmple.com</div>
                <div class="item">P.O Box 865<br>Southampton NY 11969</div>
                <div class="soc">
                    <img src="./assets/image/WhatsApp.png" alt="">
                    <img src="./assets/image/Instagram.png" alt="">
                    <img src="./assets/image/facebook.png" alt="">
                </div>
            </div>
        </div>
    </section>

</main>

<? include './shared/footer.php' ?>
</body>
</html>