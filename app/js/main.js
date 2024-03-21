const setReservation = (card, isReserved) => {
  card.classList.toggle("reserved", isReserved);
};

const handleCardClick = (evt) => {
  const parentCard = evt.target.closest(".card");

  if (evt.target.closest(".card__button")) {
    parentCard.addEventListener("mouseout", handleMouseOut);
  } 
  else if (evt.target.closest(".card__booked") || evt.target.closest(".card__booked-wrapper") && !evt.target.closest(".card__booked-link")) {
    setReservation(parentCard, false);
  }
};

const handleMouseOut = (evt) => {
  const parentCard = evt.target.closest(".card");
  let relatedTarget = evt.relatedTarget;

  if (!parentCard.contains(relatedTarget)) {
    setReservation(parentCard, true);
    parentCard.removeEventListener("mouseout", handleMouseOut);
  }
};

const cards = document.querySelector(".rooms__cards");
cards.addEventListener("click", handleCardClick);