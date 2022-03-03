const requestURL = 'https://jaredmckay.github.io/wdd230/chamber/data/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['business'];
    business.forEach(displayCard);
  });

  function displayCard(directory) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let busname = document.createElement('h2');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let moto = document.createElement('p');
    let logo = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    busname.textContent = `${business.name}`;
    phone.textContent = `The ${business.phone} President of the Church`;
    website.textContent = `Date of Birth: ${business.website}`;
    moto.textContent = `Place of Birth: ${business.moto}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.logo);
    portrait.setAttribute('alt', `${business.name} Logo`); 
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(busname);
    card.appendChild(phone)
    card.appendChild(website);
    card.appendChild(moto);
    card.appendChild(logo);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }