var x;

function storeValue(rating) {
    x = rating;
}
function submit() {
    if (x != null) {
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "flex";
        document.getElementById("rating").innerHTML = "&nbsp;" + x +  "&nbsp;";
    }
    else {
        document.getElementById("alert").innerHTML ="Please select a rating!";
    }
}