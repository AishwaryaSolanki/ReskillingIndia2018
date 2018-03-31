var color;
var height;
var width;
var table = $("#pixelCanvas");
var td = $("td");

$("#button").on('click', makeGrid);

function reset(){
		 $(table).empty();
		 height = 0;
		 width = 0;
		 $("td").css('background-color', "");
}

function makeGrid() {
	// making the grid by user defined size
    reset();
    values();
	$(table).css("display", "inline-block");
       for(var i=0; i<height; i++){
            table.append("<tr>");
   	          for(var j=0; j<width; j++){
                       table.append("<td></td>");
   	             }
   	     table.append("</tr>");
           }
    colorGrid();
}


function values(){
	height= $("#inputHeight").val();
	width = $("#inputWidth").val();
	color = $("#colorPicker").val();
}

function colorGrid(){
	// color = $("#colorPicker").val();
	// for(var i=0; i<td.length; i++){
	// 	var tdd = $("td")[i];
	// 	tdd.on('click', function(){
	// 		$(this).css('background-color', color);
	// });
	// }
	$(document).on("click", "td" , function() {
          var color = $("#colorPicker").val();
          $(this).css('background-color',color);
        });
}



