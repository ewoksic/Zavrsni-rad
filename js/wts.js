var x = document.getElementById("wtsAll");
var y = document.getElementById("wtsHosteli");
var c = document.getElementById("wtsHoteli");

function wtsAll() {
    x.style.display = "block";
    c.style.display = "flex";
    y.style.display = "flex";
}
function wtsHostels() {
    y.style.display = "flex";
    c.style.display = "none";
}
function wtsHotels() {
    c.style.display = "flex";
    y.style.display = "none";
}