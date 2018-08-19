var text = "Siempre que hay luna llena, salen en grupo para jugar. Al amanecer, los Clefairy, agotados, regresan a sus refugios de montaña para dormir acurrucados unos con otros.";
var indices = [];
var lineSize = 41;
var totalLanes = 0;

var lane1 = "",
	lane2 = "",
	lane3 = "",
	lane4 = "",
	lane5 = "",
	lane6 = "",
	lane7 = "";

function main(){
	for (var i = 0; i < (lineSize + 1); i++) {
		if (text[i] === ' '){
			indices.push(i);
		}
	}
	var lastItem = indices.length - 1;
	// console.log(indices[lastItem]);
	if (lastItem <= lineSize) {
		switch(totalLanes){
			case 0:
				lane1 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
				text = text.substr(indices[lastItem] + 1, text.length);
				break;

			case 1:
				lane2 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
				text = text.substr(indices[lastItem] + 1, text.length);
				break;

			case 2:
				lane3 = '"' + text.substr(0, indices[lastItem]) + '"';
				text = text.substr(indices[lastItem] + 1, text.length);
				break;
				
			case 3:
				lane4 = "\n";
				lane5 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
				text = text.substr(indices[lastItem] + 1, text.length);
				break;
				
			case 4:
				lane6 = '"' + text.substr(0, indices[lastItem]) + '\\n"';
				text = text.substr(indices[lastItem] + 1, text.length);
				break;
				
			case 5:
				lane7 = '"' + text.substr(0, indices[lastItem]) + '"';
				text = text.substr(indices[lastItem] + 1, text.length);
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
	}
}

main();