
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-modal__grid')
  const items = grid.querySelectorAll('.product-modal__item')

  if (items.length > 6) {
    if (items.length <= 9) {
      grid.style.setProperty('--itemsCount', items.length)
    } else {
      grid.style.setProperty('--itemsCount', 9)
    }
  } 
})