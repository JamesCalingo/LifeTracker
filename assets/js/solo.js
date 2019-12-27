var HP;

$("#soloSubmit").on("click", function(e){
  e.preventDefault;
  let name = $("#name").val().trim();
  HP = $("#startingHP").val();

if(!name || !HP){
  alert("You need to fill in BOTH forms please!");
  return false
}
else{
  $("#lifeCounter").html(`<div class="text-center">
  <span id="displayName" class="display-4">${name}</span>
  <div id="health" class="display-1">${HP}</div>
  <div class="container w-50">
    <div class="row justify-content-center">
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="-1">+1</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="1">-1</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="-5">+5</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="5">-5</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="-10">+10</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="10">-10</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="-50">+50</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="50">-50</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="-100">+100</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="100">-100</button>
      </div>
    </div>
    <button id="nameChange" class="btn btn-info mt-3">Change Name</button>
  </div>
</div>`)
}
})

$(document).on("click", ".btn-lg", function(e){
  e.preventDefault();
  let change = parseFloat($(this).attr("data-attribute"));
  HP -= change;
$("#health").html(HP);
})
// NOTE: for some reason using += concatenated a string, so I'm using -= and reversing the data-attribute values

$(document).on("click", "#nameChange", function(e){
  e.preventDefault();
  $("#displayName").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm" class="btn btn-dark">Confirm</button>`);
  $("#nameChange").addClass("disabled");
});

$(document).on("click", "#confirm", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
  $("#displayName").html(newName);
  $("#nameChange").removeClass("disabled");
  };
});
