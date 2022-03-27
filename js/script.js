function moveCarousel(event) {
  current_card = event.target.parentElement;
  cards = Array.from(current_card.parentElement.getElementsByClassName("card"));

  current_card_index = cards.indexOf(current_card);
  last_index = cards.length - 1;

  previous_card_index = (current_card_index === 0 ? last_index : current_card_index - 1);
  next_card_index = (current_card_index === last_index ? 0 : current_card_index + 1)

  other_indices = new Set(cards.keys());
  other_indices.delete(previous_card_index);
  other_indices.delete(current_card_index);
  other_indices.delete(next_card_index);

  cards[current_card_index].classList.add("middle-card");
  cards[current_card_index].classList.remove("left-card");
  cards[current_card_index].classList.remove("right-card");
  cards[current_card_index].classList.remove("hidden-card");

  cards[previous_card_index].classList.add("left-card");
  cards[previous_card_index].classList.remove("middle-card");
  cards[previous_card_index].classList.remove("right-card");
  cards[previous_card_index].classList.remove("hidden-card");

  cards[next_card_index].classList.add("right-card");
  cards[next_card_index].classList.remove("left-card");
  cards[next_card_index].classList.remove("middle-card");
  cards[next_card_index].classList.remove("hidden-card");

  for (const i of other_indices) {
    cards[i].classList.add("hidden-card");
    cards[i].classList.remove("left-card");
    cards[i].classList.remove("right-card");
    cards[i].classList.remove("middle-card");
  }
}
