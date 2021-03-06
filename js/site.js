
/*====================================================
 build array of colors and pull one to each variable
====================================================*/
RandomColor = function() {
    colors = ['#000', '#f00', '#00f', '#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6', '#e67e22', '#f1c40f', '#34495e', '#cbff59', '#59ff9a', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#90A4AE', '#78909C', '#607D8B', '#546E7A' ]
    return colors[Math.floor(Math.random()*colors.length)];
}

RandomColor1 = RandomColor();
RandomColor2 = RandomColor();
OriginalColor = $('.logo-n').css('background-color');
OriginalLink = '';


setTimeout(function(){
  OriginalLink = $('.blurb').data('og-color');
}, 3000);


$(document).ready(function(){

	$('.logo').hover(
  function() {
    RandomColor1 = RandomColor();
    RandomColor2 = RandomColor();

  	$('.logo-n').addClass('random-color1');
  	$('.logo-v').addClass('random-color2');
    $('.random-color1').css('background', RandomColor1);
    $('.random-color2').css('background', RandomColor2);

  }, function() {

    $('.logo-n').removeClass('random-color1');
    $('.logo-v').removeClass('random-color2');

    $('.logo-n').css('background', '#1c1c1c');
    $('.logo-v').css('background', '#1c1c1c');

  });


	$('.burger--bun').click(function(){
    $(this).toggleClass('grilled');
    $('.logo div').toggleClass('white-out');
    $('.burger--platter').toggleClass('plated');
	});


  /*====================================================
   Copyright foreverrrr
  ====================================================*/

  var year = new Date().getFullYear();
  $('.year').text(year);


  /*====================================================
   Type that shiiiiet
  ====================================================*/

  $('.blurb h1').typed({
    strings: ["Hi, I'm Nate."],
    typeSpeed: 0
  });

  var blurbText = "I'm a Web Designer at <a href='https://boldcommerce.com' class='link--bold'>Bold</a>, located in <a href='https://en.wikipedia.org/wiki/Winnipeg' class='link--wiki'>Winnipeg</a>. When I'm not working on <a href='https://shopify.com' class='link--shopify'>Shopify</a> sites, I also co-host a weekly radio show dedicated to the obscure, funky side of world music, called <a href='http://www.umfm.com/programming/programgrid/334/'>International Feel</a>.";

  setTimeout(function(){
    $('.blurb p').typed({
      strings: [blurbText],
      typeSpeed: 0,
      callback: function() {

        $('.blurb a').hover(
          function() {
            RandomColor1 = RandomColor();

            $(this).addClass('random-color1');
            $('.random-color1').css('color', RandomColor1);

          }, function() {

            $('.random-color1').css('color', OriginalLink);
            $(this).removeClass('random-color1');

        });

      },
    });
  }, 1500);

});
