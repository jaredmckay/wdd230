const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displaySuffix(prophet) {

    switch (prophet.order) {
      case 1:
        order = `${prophet.order} st`;
        break;
      case 2:
        order = `${prophet.order} nd`;
        break;
      case 3:
        order = `${prophet.order} rd`;
        break;
      default:
        order = `${prophet.order} th`;
        break; 
    }
  }
  function displayProphets(prophet, displaySuffix) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let birthpl = document.createElement('p');
    let order = document.createElement('p');
    let portrait = document.createElement('img');
    let suffix = displaySuffix 

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    order.textContent = `The ${prophet.order} President of the Church`;
    birth.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthpl.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} the ${displaySuffix +1} President of the Church of Jesus Christ of Ladder Day Saints `); 
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(order)
    card.appendChild(birth);
    card.appendChild(birthpl);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
  
  