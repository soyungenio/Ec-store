// JavaScript Document
$(document).ready(function () {
	$(".posNum").mask("+7 (999) 999-99-99");

    function getCartData(){
	   return JSON.parse(localStorage.getItem('cart'));
	}
	var choseddate;
	/////////////////////////////Дата выбора в корзине 
	var dt = new Date();
	var dd = dt.getDate();
	var mm = dt.getMonth()+1; 
	var yyyy = dt.getFullYear();
	 if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		} 
	
	var year = yyyy+'-'+mm+'-'+dd;
	document.getElementById("date").setAttribute("min", year);
	choseddate = year;
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

	if($("#date").val()==""){
		var datefrominput = year;
		$("#date").val(datefrominput);
	}
	else
		var datefrominput =  $("#date").val();

	var onloadmetka = false;
    $( "input[name=Time]" ).each(function( index ){
		if(datefrominput == year)
			if($(this).val() < time){
				$(this).prop('disabled', true);
				$(this).parent().addClass("gray");
			}else{
				onloadmetka = true;
			}
	});
	if(onloadmetka)
		$(".unavailable").hide(0);
	else
		$(".unavailable").show(0);

	$("#date").on("change", function() {
		choseddate = $(this).val();
		if(year == choseddate){
			var metka = false;
			$( "input[name=Time]" ).each(function( index ){
				if($(this).val() < time){
					$(this).prop('disabled', true);
					$(this).parent().addClass("gray");
				}else{
					metka = true;
				}
			});
			if(metka)
				$(".unavailable").hide(0);
			else
				$(".unavailable").show(0);
		}
		else{
			$( "input[name=Time]" ).each(function( index ){
					$(this).prop('disabled', false);
					$(this).parent().removeClass("gray");
			});
			$(".unavailable").hide(0);
		}
	})
	///////////////////////////////////////

	$(".scrip1").submit(function(e){
		var group = $(".scrip1 .posGroup").val();
		var tel = $(".scrip1 .posNum").val();
        var address = $(".scrip1 .posAddress").val();
        var email = $(".scrip1 .posEmail").val();
		var time = $("input[name=Time]:checked").val();
		var date = choseddate;

        /////var comment = $(".scrip1 .posComment").val();
		if(group==null || group=="" || tel==null || tel=="" || address==null || address=="" || time==null || time==""){
			$(".scrip1 .posGroup").prop('required',true);
			$(".scrip1 .posNum").prop('required',true);
			$(".scrip1 .posAddress").prop('required',true);
			$(".scrip1 .posEmail").prop('required',true);
			$("input[name=Time]").prop('required',true);
			
		}else{
			$('.scrip1 .posGroup').val('');
			$('.scrip1 .posNum').val('');
			$('.scrip1 .posAddress').val('');
			$('.scrip1 .posEmail').val('');

			$(".scrip1 .posGroup").prop('required',false);
			$(".scrip1 .posNum").prop('required',false);
            $(".scrip1 .posAddress").prop('required',false);
            $(".scrip1 .posEmail").prop('required',false);
            $("input[name=Time]").prop('required',false);

			var personal = [[group,tel,address,email, date+' '+time],getCartData()];

			var xmlhttp = new XMLHttpRequest();
            var link = "http://play-food.ru/order";
			xmlhttp.open("POST", link, true);
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
			xmlhttp.send(JSON.stringify(personal));
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == XMLHttpRequest.DONE) {
					console.log(xmlhttp.responseText);
					window.location = xmlhttp.responseText;
				}
			}
		}
	});
	function replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	}    

});


