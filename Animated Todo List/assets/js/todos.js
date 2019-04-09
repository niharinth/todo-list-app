//checking off todos
$("ul").on("click" ,"li" ,function(){
	$(this).toggleClass("completed")	
})

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	}); 						      //cheatcodes
	e.stopPropagation();         	 //cheatcodes*2
})

$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})