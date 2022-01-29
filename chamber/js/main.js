function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    console.log("It Worked");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;

const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Date the document was last modified: ${document.lastModified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("copyjava").innerHTML = year;

const datefieldUK = document.querySelector("aside");
const now = new Date()
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d)
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;