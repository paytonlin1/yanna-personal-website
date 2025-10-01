function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav-container").classList.toggle("change");
}

function filterImages(filterName) {
    if(filterName != "ALL") { 
        var x = document.getElementsByClassName(filterName);

    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    var y = document.getElementById(filterName).style.display = "block";
    }
    else {
        var x = document.getElementsByClassName(filterName);
        for(var i = 0; i < x.length; i++){
            x[i].style.display = "block";
            }
    }
}