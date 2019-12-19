let p1=0
let p2=0
let p3=0;
let p4=0;

$("#hp1").html(p1);
$("#hp2").html(p2);
$("#hp3").html(p3);
$("#hp4").html(p4);

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