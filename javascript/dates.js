const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Date the document was last modified: ${document.lastModified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("copyjava").innerHTML = year;
