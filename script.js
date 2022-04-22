let textInput = document.querySelector('.textInput');
let buttonAddList = document.querySelector('.addInList');
let numberedList = document.querySelector('.numberedList');

buttonAddList.addEventListener('click', () => {

   let newItem = document.createElement('li');
   let newButtonDelete = document.createElement('button');

   newButtonDelete.setAttribute('class', 'removeElem')
   newButtonDelete.innerHTML = 'x';
   newItem.setAttribute('class', 'elementList')
   newItem.innerHTML = textInput.value;

   numberedList.append(newItem);
   textInput.value = '';
   newItem.append(newButtonDelete);

   newButtonDelete.addEventListener('click', () => newItem.remove());
});