//custom animation for the load of the search button

$(document).ready(function(){
  $("#search").click(function(){
    $(".search-container input[type=text]").toggle(500);
  });
});
