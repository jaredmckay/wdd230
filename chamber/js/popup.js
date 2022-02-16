
const day = new Date();

var weekDay = day.getDay();
var popup = document.querySelector("#popup");
if (weekDay === 1 | weekDay === 2) {
    popup.style.display = "block"
}
else{
    document.querySelector("#popup").style.visibility="hidden"
    popup.style.display = "none";
}
