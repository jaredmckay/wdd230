// const favChap = document.querySelector('#favchap');
// console.log(favChap);
// const useButton = document.querySelector('button');
// console.log(useButton);
// const list = document.querySelector('.list');
// console.log(list);

// useButton.onclick = function () {

//     let myList = input.value;
//     input.value='';
//     for (let i = 1; i <= size; i++) {
//         let li = document.createElement('li');
//         li.innerHTML =  `Item: <strong>${i}</strong>`;
//         list.appendChild(li);
//     }
// });



const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const useButton = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listValue = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listValue);
  listValue.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'X';
  list.appendChild(listItem);

  listBtn.onclick = function() {
    list.removeChild(listItem);
  }

}
