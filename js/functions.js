function processNumberInput(number){
	var list="<ul id='list'>"
	for(var x=1; x<=number;x++){
		if(x%3==0&&x%5!=0){
			message="ping";
		}
		else if(x%5==0&&x%3!=0){
			message="pong";
		}
		else if(x%3==0&&x%5==0){
			message="pingpong";
		}
		else{
			message=x;
		}
		list+=addItemToList(message);
	}
	list+="</ul>";
	return list;
}

function addItemToList(data){
	return "<li>"+data+"</li>";
}