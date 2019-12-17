var HP;

$("#soloSubmit").on("click", function(e){
  e.preventDefault;
  let name = $("#name").val().trim();
  HP = $("#startingHP").val().trim();
  $("#lifeCounter").html(`<div class="text-center">
  <h1>${name}</h1>
  <div id="health" class="display-1">${HP}</div>
  <div class="container w-50">
    <div class="row justify-content-center">
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="1">+1</button>
        <br>
        <button class="btn btn-lg btn-danger">-1</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success" data-attribute="5">+5</button>
        <br>
        <button class="btn btn-lg btn-danger">-5</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success">+10</button>
        <br>
        <button class="btn btn-lg btn-danger">-10</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success">+50</button>
        <br>
        <button class="btn btn-lg btn-danger">-50</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-lg btn-success">+100</button>
        <br>
        <button class="btn btn-lg btn-danger">-100</button>
      </div>
    </div>
  </div>
</div>`)
})

$(document).on("click", ".btn-lg", function(e){
  e.preventDefault();
  HP += $(this).attr("data-attribute");
$("#health").html(HP)
})