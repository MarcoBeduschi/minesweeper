var grid_size = 10;
console.log("Hello");


// Grid creation
for (var i = 0; i < grid_size; i++) {
  $("#minesweeper").append("<tr>");
  for (var j = 0; j < grid_size; j++) {
    $("#minesweeper tr:last-child").append("<td class='unopened'></td>");
  }
}

// Mine adding
var ini_mines = 10;
rnd_10 = parseInt(Math.random()*grid_size + 1);

var selected_row = $("#minesweeper tr").eq(rnd_10);
var selected_col = $(selected_row).eq(rnd_10);

// $(selected_col).data()
