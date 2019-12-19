$("#multi").on("click", function(e){
  e.preventDefault();
  $(".main").html(`<p>Next, what is everyone's starting HP?
  <form>
  <div class="form-group">
    <input type="number" class="form-control" id="HP" aria-describedby="emailHelp">
   
  </div>
 
  <button id="HPsubmit" class="btn btn-primary">Submit</button>
</form>`);
});

var startHP = 20;
$(document).on("click", "#HPsubmit", function(e){
  e.preventDefault();
  startHP = $("#HP").val()
  $(".main").html(
  `<p>And may I ask just how many players we're talking about?</p>
  <a href="2players.html" class="button btn btn-danger">2 Players</a>
  <a href="3players.html" class="button btn btn-success">3 Players</a>
  <a href="4players.html" class="button btn btn-primary">4 Players</a>`
  );
});

let p1=startHP;
let p2=startHP;
let p3=startHP;
let p4=startHP;

$("#hp1").html(p1);
$("#hp2").html(p2);
$("#hp3").html(p3);
$("#hp4").html(p4);
console.log(p1)

function update(){
  $("#hp1").html(p1);
  $("#hp2").html(p2);
  $("#hp3").html(p3);
  $("#hp4").html(p4);
  };
  
  
  $("#hp1Up").on("click", function (event){
    event.preventDefault();
    p1++;
    update();
  });
  
  $("#hp1Dn").on("click", function (event){
    event.preventDefault();
    p1--;
    update()
  });
  
  $("#hp2Up").on("click", function (event){
    event.preventDefault();
    p2++;
    update()
  });
  
  $("#hp2Dn").on("click", function (event){
    event.preventDefault();
    p2--;
    update()
  });
  
  $("#hp3Up").on("click", function (event){
    event.preventDefault();
    p3++;
    update()
  });
  
  $("#hp3Dn").on("click", function (event){
    event.preventDefault();
    p3--;
    update()
  });
  
  $("#hp4Up").on("click", function (event){
    event.preventDefault();
    p4++;
    update()
  });
  
  $("#hp4Dn").on("click", function (event){
    event.preventDefault();
    p4--;
    update()
  });