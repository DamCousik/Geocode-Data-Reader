function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("view").style.marginLeft = "300px";
  document.getElementById("filterMenu").style.marginLeft = "300px";
  document.getElementById("tableDisplay").style.marginLeft = "320px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("view").style.marginLeft= "0";
  document.getElementById("filterMenu").style.marginLeft = "30px";
  document.getElementById("tableDisplay").style.marginLeft = "320px";
}

function toggleFilterMenu() {
   var x = document.getElementById("filterMenu");
   if (x.style.display === "none") {
       x.style.display = "block";
    } else {
       x.style.display = "none";
    }
}
