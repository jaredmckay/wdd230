const requestURL = 'https://jaredmckay.github.io/wdd230/templeinn&suites/data/temple.json';
const favBtn = document.querySelector('.favBtn');
const display = document.querySelector('article');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const temples = jsonObject['temples'];
    temples.forEach(displayCard);
  });

function displayCard(temples) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let templeName = document.createElement('h2');
  let templePhone = document.createElement('p');
  let templeService = document.createElement('p');
  let templeSS = document.createElement('p');
  let templeHistory = document.createElement('p');
  let templeAddress = document.createElement('p');
  let templeClosure = document.createElement('p');
  let templeOS = document.createElement('p');
  let logo = document.createElement('img');

   // Change the innerHTML property of the h2 element to contain the buisness full name
  templeName.innerHTML = `${temples.location}`;
  templeAddress.innerHTML = `${temples.address}`;
  templePhone.innerHTML = `${temples.phone}`;
  templeService.innerHTML = `Services available ${temples.services}`;
  templeOS.innerHTML = `Ordinaces schedule ${temples.ordinaceSchedule}`;
  templeSS.innerHTML = `Session Schedule ${temples.sessionSchedule}`;
  templeHistory.innerHTML = `${temples.history}`;
  templeClosure.innerHTML = `Closed the following days ${temples.templeClosure}`;

   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  card.className = 'card';
  logo.className = 'logoImg';
  logo.setAttribute('src', temples.picture);
  logo.setAttribute('alt', `${temples.location} Temple`); 
  logo.setAttribute('loading', 'lazy');


    // Add/append the section(card) with the h2 element
  card.appendChild(templeName);
  card.appendChild(templeAddress);
  card.appendChild(templePhone);
  card.appendChild(logo);
  card.appendChild(templeService);
  card.appendChild(templeOS);
  card.appendChild(templeSS);
  card.appendChild(templeHistory);
  card.appendChild(templeClosure);
  
    // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.card').appendChild(card);
}