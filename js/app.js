document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm)

  const deleteAll = document.querySelector('#reset');
  deleteAll.addEventListener('click', handleButtonClick)
})

const handleForm = function() {
  event.preventDefault();
  const resultSubmit = document.querySelector('#reading-list');
  const newListItem = document.createElement('li')
  newListItem.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
  const list = document.querySelector('ul');
  list.appendChild(newListItem);

  document.querySelector('#new-item-form').reset();
};

const handleButtonClick = function() {
  const resultSubmit = document.querySelector('#reading-list');
  document.querySelector('#reading-list').innerHTML = '';
}
