// JavaScript Document
function printDiv(id) {

	 $( ".table1" ).hide();
	 $( ".add" ).hide();
	 $( ".save" ).hide();
	 
	 $('.table2').find('tr').each(
	 function(index) {
			if(this.className!='party'+id && this.className != 'headers')
				$(this).hide();
	});
     window.print();

     $( ".table1" ).show();
	 $( ".add" ).show();
	 $( ".save" ).show();
	 
	 $('.table2').find('tr').each(
	 function(index) {
			if(this.className!='party'+id && this.className != 'headers')
				$(this).show();
	});
}

// JavaScript Document
$(document).ready(function () {
    $(".headbutton").click(function(){
        console.log($(".menu").offset().top);
        $('html, body').animate({scrollTop: $(".headback").height()+92}, 550);
    });
    var opened = false;
    $(".menumobilebutton").click(function(){
        if(!opened){
            $(".menu").addClass("height100");
            $("body").addClass("noscroll");
            $(".formobmenu").css("height","100%");
            $(".formobmenu").css("overflow-y","scroll");
            opened = true;
        }else{
            $(".menu").removeClass("height100");
            $("body").removeClass("noscroll");
            $(".formobmenu").css("height","intial");
            $(".formobmenu").css("overflow-y","intial")
            opened = false;
        }
    })
    $(".readmore").click(function(){
        $(this).prev().css("height","auto");
		$(this).hide();
    });


});