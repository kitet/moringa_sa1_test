$("#play_button").click(function(){
		var numberInput=parseInt($(".number").val());
		$("#list").replaceWith("<p></p>");
		showList(numberInput);	
});
function showList(number){
		$("#page").append(processNumberInput(number));
		$(".number").val("");
}