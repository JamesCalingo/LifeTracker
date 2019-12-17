$("#multi").on("click", function(e){
  e.preventDefault();
  $(".main").html(`<p>And may I ask just how many players we're talking about?</p>
  <a href="2players.html" class="button btn btn-danger">2 Players</a>
  <a href="3players.html" class="button btn btn-success">3 Players</a>
  <a href="4players.html" class="button btn btn-primary">4 Players</a>`)
})