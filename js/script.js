$(document).ready(function(){
  $('.slider').slick({
  	dots:true,
  	slidesToShow:3,
  	infinite:false,
  	responsive:[
  	{
  		breakpoint: 600,
  		settings: {
  			slidesToShow:1,
  			arrows:false
  		}
  	} 
  	]
  });
   $('.slider2').slick({
  	dots:true,
  	infinite:false,

   });
});