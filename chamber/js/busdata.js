const requestURL = 'https://jaredmckay.github.io/wdd230/chamber/data/data.json';
const listBtn = document.querySelector('.listBtn');
const cardBtn = document.querySelector('.cardBtn');
const cards = document.querySelector('div.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const directory = jsonObject['business'];
    directory.forEach(displayCard);
  });

function displayCard(directory) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let busname = document.createElement('h2');
  let phone = document.createElement('p');
  let website = document.createElement('a');
  let moto = document.createElement('p');
  let logo = document.createElement('img');
   // Change the innerHTML property of the h2 element to contain the prophet's full name
  busname.innerHTML = `${directory.name}`;
  phone.innerHTML = `${directory.phone}`;
  website.innerHTML = `${directory.website}`;
  moto.innerHTML = `${directory.moto}`;
   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  card.className = 'cardDis';
  logo.className = 'logoImg';
  logo.setAttribute('src', directory.logo);
  logo.setAttribute('alt', `${directory.name} Logo`); 
  logo.setAttribute('loading', 'lazy');
  website.setAttribute('href', directory.website);
  website.setAttribute('target', '_blank');

    // Add/append the section(card) with the h2 element
  card.appendChild(busname);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(moto);
  card.appendChild(logo);
    // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}



listBtn.addEventListener("click", () => {
  cards.classList.replace("card-view", "list-view")
  console.log("it is working")
});

cardBtn.addEventListener("click", () => {
  cards.classList.replace("list-view", "card-view")
  console.log("it is working")
});

