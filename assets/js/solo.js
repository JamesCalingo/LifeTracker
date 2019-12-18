var HP;

$("#soloSubmit").on("click", function(e){
  e.preventDefault;
  let name = $("#name").val().trim();
  HP = $("#startingHP").val();
  $("#lifeCounter").html(`<div class="text-center">
  <h1>${name}</h1>
  <div id="health" class="display-1">${HP}</div>
  <div class="container w-50">
    <div class="row justify-content-center">
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="+1">+1</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="-1">-1</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="+5">+5</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="-5">-5</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="+10">+10</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="-10">-10</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="+50">+50</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="-50">-50</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="+100">+100</button>
        <br>
        <button class="btn btn-lg btn-danger" data-attribute="-100">-100</button>
      </div>
    </div>
  </div>
</div>`)
})

$(document).on("click", ".btn-lg", function(e){
  e.preventDefault();
  let change = parseFloat($(this).attr("data-attribute"));
  HP += change;
$("#health").html(HP);
})