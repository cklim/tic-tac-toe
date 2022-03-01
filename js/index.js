$(document).ready(function () {
  var x = "x";
  var o = "o";
  var count = 0;
  var score = { o: 0, x: 0 };
  var currentPlayer = o;
  var currentWinner;
  function restartGame() {
    currentWinner = undefined;
    $("#game li").text("+");
    $("#game li").removeClass("disable");
    $("#game li").removeClass("o");
    $("#game li").removeClass("x");
    $("#game li").removeClass("btn-primary");
    $("#game li").removeClass("btn-info");
  }
  function checkWinner(player) {
    return (
      ($("#one").hasClass(player) &&
        $("#two").hasClass(player) &&
        $("#three").hasClass(player)) ||
      ($("#four").hasClass(player) &&
        $("#five").hasClass(player) &&
        $("#six").hasClass(player)) ||
      ($("#seven").hasClass(player) &&
        $("#eight").hasClass(player) &&
        $("#nine").hasClass(player)) ||
      ($("#one").hasClass(player) &&
        $("#four").hasClass(player) &&
        $("#seven").hasClass(player)) ||
      ($("#two").hasClass(player) &&
        $("#five").hasClass(player) &&
        $("#eight").hasClass(player)) ||
      ($("#three").hasClass(player) &&
        $("#six").hasClass(player) &&
        $("#nine").hasClass(player)) ||
      ($("#one").hasClass(player) &&
        $("#five").hasClass(player) &&
        $("#nine").hasClass(player)) ||
      ($("#three").hasClass(player) &&
        $("#five").hasClass(player) &&
        $("#seven").hasClass(player))
    );
  }

  function makeMove(context, player) {
    count++;
    $(context).text(player);
    $(context).addClass(
      "disable " + player + " btn-" + (player === o ? "primary" : "info")
    );
    if (checkWinner(player)) {
      currentWinner = player;
      alert(currentWinner.toUpperCase() + " wins");
      count = 0;
      score[currentWinner]++;
      $("#" + currentWinner + "_win").text(score[currentWinner]);
    }
  }

  $("#game li").click(function () {
    if (currentWinner) {
      alert(
        currentWinner.toUpperCase() + " has won the game. Start a new game"
      );
      restartGame();
    } else if (count == 9) {
      alert("Its a tie. It will restart.");
      restartGame();
      count = 0;
    } else if ($(this).hasClass("disable")) {
      alert("Already selected");
    } else {
      currentPlayer = count % 2 === 0 ? o : x;
      makeMove(this, currentPlayer);
    }
  });
  $("#reset").click(function () {
    restartGame();
    count = 0;
  });
});
