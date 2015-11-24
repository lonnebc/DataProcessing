/* use this to test out your function */
window.onload = function() {
 	changeColor("cz","#cc4400")
 	changeColor("path6484","#ff573d")
 	changeColor("path2906","#ff9966");
	changeColor("be","#4d1900");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
     document.getElementById(id).style.fill = color;
}