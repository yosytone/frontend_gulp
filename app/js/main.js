// Функция для установки состояния резервации карточки
const setReservation = (card, isReserved) => {
  card.classList.toggle("reserved", isReserved);
};

// Функция для обработки нажатия на карточку
const handleCardClick = (evt) => {
  const parentCard = evt.target.closest(".card");

  // Если нажата кнопка на карточке, добавляем слушатель для отмены резервации
  if (evt.target.closest(".card__button")) {
    parentCard.addEventListener("mouseout", handleMouseOut);
  } 
  // Если нажата область снятия резервации, снимаем резервацию
  else if (evt.target.closest(".card__booked") || evt.target.closest(".card__booked-wrapper") && !evt.target.closest(".card__booked-link")) {
    setReservation(parentCard, false);
  }
};

// Функция для обработки выхода указателя мыши за пределы карточки
const handleMouseOut = (evt) => {
  const parentCard = evt.target.closest(".card");
  let relatedTarget = evt.relatedTarget;

  // Если указатель мыши вышел за пределы карточки, устанавливаем резервацию
  if (!parentCard.contains(relatedTarget)) {
    setReservation(parentCard, true);
    parentCard.removeEventListener("mouseout", handleMouseOut);
  }
};

const cards = document.querySelector(".rooms__cards");
// Добавляем слушатель для нажатия на карточку
cards.addEventListener("click", handleCardClick);