var text = "";
var indices = [];
var lineSize = 41;
var totalLanes = 0;
var doubleSpaceActivate = true;

var lane1 = "",
	lane2 = "",
	lane3 = "",
	lane4 = "",
	lane5 = "",
	lane6 = "",
	lane7 = "";


$("#convertButton").click(function(){
	if($("#originalText").val() != ""){
		if ($("#lineAmount").val() != ""){
			if($("#lineAmount").val() >= 6){
				text = $("#originalText").val();
				lineSize = parseInt($("#lineAmount").val());
				indices = [];
				totalLanes = 0;
				lane1 = "";
				lane2 = "";
				lane3 = "";
				lane4 = "";
				lane5 = "";
				lane6 = "";
				lane7 = "";
				console.log(text);
				console.log(lineSize);
				$("#newText").html("");
				main();
			} else {
				$("#someMessageErr").html("Introduce un valor de tamaño máximo por línea mayor");
				setTimeout(function(){$("#someMessageErr").html("");}, 2000);
			}
		} else {
			$("#someMessageErr").html("Introduce un valor de tamaño máximo por línea");
			setTimeout(function(){$("#someMessageErr").html("");}, 2000);
		}
		
	}
	else {
		$("#someMessageErr").html("Introduce algún texto");
		setTimeout(function(){$("#someMessageErr").html("");}, 2000);
	}
});


function main(){
	for (var i = 0; i < parseInt(lineSize + 1); i++) {
		if (text[i] === ' '){
			indices.push(i);
		}
	}
	var lastItem = indices.length - 1;
	// console.log(indices[lastItem]);
	if (lastItem <= lineSize) {
		switch(totalLanes){
			case 0:
				if (text.length < lineSize){
					lane1 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane1 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;

			case 1:
				if (text.length < lineSize){
					lane2 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane2 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;

			case 2:
				if (text.length < lineSize){
					lane3 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane3 = '"' + text.substr(0, indices[lastItem]) + '"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;
				
			case 3:
				lane4 = "\n";
				if (text.length < lineSize){
					lane5 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane5 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;
				
			case 4:
				if (text.length < lineSize){
					lane6 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane6 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;
				
			case 5:
				if (text.length < lineSize){
					lane7 = '"' + text.substr(0, text.length) + '"';
					text = "";
				} else {
					lane7 = '"' + text.substr(0, indices[lastItem]) + '"';
					text = text.substr(indices[lastItem] + 1, text.length);
				}
				break;
		}
		totalLanes++;
	}

	switch(totalLanes){
		case 1:
			console.log(lane1 + "\n\n");
			break;
		case 2:
			console.log(lane1 + "\n" + lane2 + "\n\n");
			break;
		case 3:
			console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n\n");
			break;
		case 4:
			console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n\n");
			break;
		case 5:
			console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6 + "\n\n");
			break;
		case 6:
			console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6 + "\n" + lane7 + "\n\n");
			break;

	}
	console.log("TEXT:");
	console.log(text + "\n\n");
	console.log("============================");
	if((totalLanes < 6) && (text.length > 0)){
		main();
	} else {
		if (doubleSpaceActivate == true){
			lane1 = "    " + lane1;
			lane2 = "    " + lane2;
			lane3 = "    " + lane3;
			//lane4 = "    " + lane4;
			lane5 = "    " + lane5;
			lane6 = "    " + lane6;
			lane7 = "    " + lane7;
		}

		switch(totalLanes){
			case 1:
				// console.log(lane1 + "\n\n");
				$("#newText").html(lane1);
				break;
			case 2:
				// console.log(lane1 + "\n" + lane2 + "\n\n");
				$("#newText").html(lane1 + "\n" + lane2);
				break;
			case 3:
				// console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n\n");
				$("#newText").html(lane1 + "\n" + lane2 + "\n" + lane3);
				break;
			case 4:
				// console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n\n");
				$("#newText").html(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5);
				break;
			case 5:
				// console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6 + "\n\n");
				$("#newText").html(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6);
				break;
			case 6:
				// console.log(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6 + "\n" + lane7 + "\n\n");
				$("#newText").html(lane1 + "\n" + lane2 + "\n" + lane3 + "\n" + lane4 + lane5 + "\n" + lane6 + "\n" + lane7);
				break;
		}
		text = "";
		indices = [];
		lineSize = 41;
		totalLanes = 0;

		lane1 = "";
		lane2 = "";
		lane3 = "";
		lane4 = "";
		lane5 = "";
		lane6 = "";
		lane7 = "";
	}
}