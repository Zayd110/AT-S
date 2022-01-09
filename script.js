const cards = document.querySelectorAll('.cards');

function transition() {
  if (this.classList.contains('active')) {
    this.classList.remove('active')
  } else
  {
    // document.querySelectorAll('.cardContainer').classList.remove('active');
		for (i = 0; i < cards.length; i++) {
		       cards[i].classList.remove('active');
		}
    this.classList.add('active');
  }
}

cards.forEach(card => card.addEventListener('click', transition));