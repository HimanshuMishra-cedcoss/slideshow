$( document ).ready(function() {
    var width=1400;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=0;
    var $slider=$('#slider');
    var $slideContainer=$slider.find('.slides');
    var $slides=$slideContainer.find('.slide');
    var interval;
    var count=1;
    var c = 0;
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
    				$('.cir3').css('color','black');
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

function fadot(){
    			if(c == 1){
    				$('.cir1').css('color','red');
    				$('.cir2').css('color','black');
    				$('.cir3').css('color','black');
    			}
    			if(c == 2){
    				$('.cir1').css('color','black');
    				$('.cir2').css('color','red');
    				$('.cir3').css('color','black');
    			}
    			if(c == 3){
    				$('.cir1').css('color','black');
    				$('.cir2').css('color','black');
    				$('.cir3').css('color','red');
    				
    			}
}
startSlider();
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);

$('.cir1').click(function(){
	stopSlider();
	c = 1;
	fadot();
	$slideContainer.animate({'margin-left': '0px'},animationSpeed);
})
$('.cir2').click(function(){
	stopSlider();
	c = 2;
	fadot();
	$slideContainer.animate({'margin-left': '-1400px'},animationSpeed);
})
$('.cir3').click(function(){
	stopSlider();
	c = 3;
	fadot();
	$slideContainer.animate({'margin-left': '-2800px'},animationSpeed);
})

});
