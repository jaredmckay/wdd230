
const list = document.querySelector('.list');
const inputs = document.querySelector('#favchap');
const useButton = document.querySelector('button');

useButton.addEventListener('click', () => {


    let myItem = inputs.value;
    inputs.value = '';

    const listItem = document.createElement('li');
    const listValue = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listValue);
    listValue.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    inputs.focus();
    


})


