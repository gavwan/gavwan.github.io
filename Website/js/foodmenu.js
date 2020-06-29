/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function riceFunction() {
  document.getElementById("myDropdownR").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnR')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentR");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function noodlesFunction() {
  document.getElementById("myDropdownN").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnN')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentN");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function JPFunction() {
  document.getElementById("myDropdownJP").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnJP')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentJP");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
