document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm)
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
