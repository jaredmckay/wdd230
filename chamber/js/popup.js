
const day = new Date();

function popupDisplay() {
    const weekDay = day.getDay();
    const popup = document.getElementById("#popup");
    if (weekDay === 1 || weekDay === 2) {
        popup.style.display = "block"
    }
    else{
        document.getElementById("#popup").style.visibility="hidden"
        popup.style.display = "none";
    }
}
