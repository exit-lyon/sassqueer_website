function moveCarousel(current_card) {
    const cards = Array.from(current_card.parentElement.getElementsByClassName("card"));
  
    const current_card_index = cards.indexOf(current_card);
    const last_index = cards.length - 1;
  
    const previous_card_index = (current_card_index === 0 ? last_index : current_card_index - 1);
    const next_card_index = (current_card_index === last_index ? 0 : current_card_index + 1)
  
    const other_indices = new Set(cards.keys());
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
  
  function autoMoveCarousel(card_deck) {
    const next_card = card_deck.getElementsByClassName("right-card")[0];
    moveCarousel(next_card);
  }
  
  const card_decks = Array.from(document.getElementsByClassName("cards"));
  const card_deck_to_interval = new Map();
  const card_deck_to_timeout = new Map();
  for (const card_deck of card_decks) {
    card_deck_to_interval.set(card_deck, setInterval(function () {
      autoMoveCarousel(card_deck)
    }, 2000));
  }
  
  function clickCarousel(event) {
    const current_card = event.target.parentElement;
    const current_card_deck = current_card.parentElement;
    moveCarousel(current_card);
  
    clearInterval(card_deck_to_interval.get(current_card_deck));
    clearTimeout(card_deck_to_timeout.get(current_card_deck));
    card_deck_to_timeout.set(current_card_deck, setTimeout(function () {
      card_deck_to_interval.set(current_card_deck, setInterval(function () {
        autoMoveCarousel(current_card_deck)
      }, 2000));
    }, 10000));
  }
  