$( document ).ready(function() {
    var width=1400;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=0;
    var $slider=$('#slider');
    var $slideContainer=$slider.find('.slides');
    var $slides=$slideContainer.find('.slide');
    var interval;
    var count=1
    function startSlider(){
    	 interval=setInterval(function(){
    	 	$slideContainer.css('float','left');
    		$slideContainer.animate({'margin-left': '-='+width},animationSpeed,function(){
    			currentSlide++;
    			dot();
    			if(currentSlide===$slides.length){
    				currentSlide=0;
    				$slideContainer.css('margin-left',0);
    			}
    		});
    		},pause);
    	
    }
    function stopSlider(){
	clearInterval(interval);
}
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);



$(".next").click(function(){
	stopSlider();
	$slideContainer.css('float','left')
  $slideContainer.animate({'margin-left': '-='+width},function(){
  	currentSlide++;
  	  dot();
  console.log(count);
  if(currentSlide===$slides.length)
  {
  	currentSlide = 0;
  	$slideContainer.css('margin-left',0);
  }
  });

});

$(".prev").click(function(){
  stopSlider();
  $slideContainer.css('float','right')
  $slideContainer.animate({'margin-right': '-='+width},function(){
  currentSlide++;
  dot();
  console.log(count);
  if(currentSlide===$slides.length)
  {
  	currentSlide = 0;
  	$slideContainer.css('margin-right',0);
  }
  });

});

function dot(){
				count++;
    			if(count == 2){
    				$('.cir1').css('color','black');
    				$('.cir2').css('color','red');
    			}
    			if(count == 3){
    				$('.cir1').css('color','black');
    				$('.cir2').css('color','black');
    				$('.cir3').css('color','red');
    			}
    			if(count == 4){
    				$('.cir1').css('color','red');
    				$('.cir2').css('color','black');
    				$('.cir3').css('color','black');
    				count = 1;
    			}
}
startSlider();
$(".cir2").click(function(){
  
});
});
