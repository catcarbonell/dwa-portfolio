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

	        if ($(loadid).hasClass("hide")){
	        //var loadid = $(this).attr("loadid");
	        
	        //$a.attr("id", loadid);
	        

	        $(loadid).removeClass('hide').addClass('active').slideDown('slow');
	        console.log(loadid + ': beep');

	        } else {
	        	$(loadid).addClass('hide').removeClass('active').slideDown('slow');
	        	console.log(loadid + ': boop');
	        }
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