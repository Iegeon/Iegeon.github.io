function loaded() {
    document.getElementById("sct").style.display = "none";
    document.getElementById("scv").style.display = "none";
}

function hog() {
    var sct = document.getElementById("sct");
    if (sct.style.display === "none") {
        sct.style.display = "block";
    } 
    else {
        sct.style.display = "none";
    }
}

function hg() {
    var sct = document.getElementById("scv");
    if (sct.style.display === "none") {
        sct.style.display = "block";
    } 
    else {
        sct.style.display = "none";
    }
}

