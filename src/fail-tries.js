const mainScreen = document.querySelector(`#root`);
const moduleLoseTries = () => {
  mainScreen.innerHTML = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="replay" type="button">Попробовать ещё раз</button>
</section>`;
};

export {moduleLoseTries};
