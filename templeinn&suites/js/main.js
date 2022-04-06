function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;
