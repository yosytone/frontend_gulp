const catalog = document.querySelector(".catalog__list");

const setReservation = (card, method, isDisabled, tabindex) => {
  card.classList[method]("reserved");
  card.querySelector(".card__button").disabled = isDisabled;
  card.querySelector(".card__title-link").setAttribute("tabindex", tabindex);
};

const getCardReserved = (evt) => {
  const parentCard = evt.target.closest(".card");
  let relatedTarget = evt.relatedTarget;
  if (!parentCard.contains(relatedTarget)) {
    setReservation(parentCard, "add", true, "-1")
    parentCard.removeEventListener("mouseout", getCardReserved);
  }
};

const setStatusOfReserve = (evt) => {
  const parentCard = evt.target.closest(".card");

  if (evt.target.closest(".card__button")) {
    parentCard.addEventListener("mouseout", getCardReserved);
  } else if (evt.target.closest(".card__booked") || evt.target.closest(".card__booked-wrapper") && !evt.target.closest(".card__booked-link")) {
    setReservation(parentCard, "remove", false, "0")
  }
};

catalog.addEventListener("click", setStatusOfReserve);
