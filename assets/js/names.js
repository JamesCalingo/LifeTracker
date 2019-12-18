let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let player4 = "Player 4";

$(".name1").html(player1);
$(".name2").html(player2);
$(".name3").html(player3);
$(".name4").html(player4);

$("#change1").on("click", function(){
  $(".name1").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm1" class="btn btn-dark">Confirm</button>`);
  $("#change1").addClass("disabled");
});

$(document).on("click", "#confirm1", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player1 = newName;
  $(".name1").html(newName);
  $("#change1").removeClass("disabled");
  };
});

$("#change2").on("click", function(){
  $(".name2").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm2" class="btn btn-dark">Confirm</button>`);
  $("#change2").addClass("disabled");
});

$(document).on("click", "#confirm2", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player2 = newName;
  $(".name2").html(newName);
  $("#change2").removeClass("disabled");
  };
});

$("#change3").on("click", function(){
  $(".name3").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm3" class="btn btn-dark">Confirm</button>`);
  $("#change3").addClass("disabled");
});

$(document).on("click", "#confirm3", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false
  }
  else{
    player3 = newName
  $(".name3").html(newName);
  $("#change3").removeClass("disabled");
  };
});

$("#change4").on("click", function(){
  $(".name4").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm4" class="btn btn-dark">Confirm</button>`);
  $("#change4").addClass("disabled");
});

$(document).on("click", "#confirm4", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player4 = newName;
  $(".name4").html(newName);
  $("#change4").removeClass("disabled");
  };
});