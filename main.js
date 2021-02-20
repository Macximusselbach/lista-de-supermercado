function EditIcon() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
      stroke="#212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`
}

function DeleteIcon() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#212529" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#212529" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>`
}

document.querySelector('#add-item-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const item = e.target.item.value;
  
  // checkbox
  const checkboxId = `checkbox-${Date.now()}`;
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.className = 'mr-3';
  inputCheckbox.id = checkboxId;

  // label
  const label = document.createElement('label');
  label.setAttribute("for", checkboxId);
  label.textContent = item;

  // checkbox section
  const checkboxSection = document.createElement('div');
  checkboxSection.appendChild(inputCheckbox);
  checkboxSection.appendChild(label);

  // editButton
  const editButton = document.createElement('button');
  editButton.type = 'button';
  editButton.className = 'btn-icon';
  editButton.id = 'edit-button';
  editButton.innerHTML = EditIcon();
  
  // deleteButton
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'btn-icon';
  deleteButton.id = 'delete-button';
  deleteButton.innerHTML = DeleteIcon();

  const buttonsSection = document.createElement('div');
  buttonsSection.appendChild(editButton);
  buttonsSection.appendChild(deleteButton);

  // li
  const li = document.createElement('li');
  li.className = 'd-flex align-items-center justify-content-between';
  li.appendChild(checkboxSection);
  li.appendChild(buttonsSection);

  document.querySelector('#items-list').appendChild(li);
  
  e.target.reset();
});

