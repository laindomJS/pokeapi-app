const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('click', e => {
  if (checkbox.classList.contains('on')) {
    checkbox.setAttribute('aria-checked', 'false');
  } else {
    checkbox.setAttribute('aria-checked', 'true');
  }
  checkbox.classList.toggle('on');
})

