$(document).ready(function() {
	//FEATHERLIGHT 
	$('a.gallery').featherlightGallery({
     openSpeed: 200,
	    previousIcon: '&#9664;',
    	nextIcon: '&#9654;'
});


	//MODAL 
	 // Adds Modal
	 $('.overlay').hide();
	 $('.slide').hide();

	$('a.slideClick').click(function(e) {

	        e.preventDefault();
	        e.stopPropagation();

	        var loadid = $(this).attr("href");

	        $(".slide").each(
	        	function(){
		        if ($(this).hasClass("active")){
		   		
		   		$(this).addClass('hide').removeClass('active').slideDown('slow');

		        
		        //console.log(loadid + ': beep');

		        //console.log($(this).attr("href"));

		        } 

		     $(loadid).removeClass('hide').addClass('active').slideDown('slow');
		        	console.log(loadid + ': boop');
		        
	        })
	})

 // Closes Modal

   $('.close').click(function(e){
    	
        e.stopPropagation();

	   	if ($(".slide").hasClass("active")){
        
        //$('.overlay').addClass('hide').slideToggle('slow');
         $(".active").addClass('hide').removeClass('active').slideDown('slow');
         console.log('closed');
        }
         
   })




});