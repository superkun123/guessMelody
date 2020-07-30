import {moduleWelcome} from "./welcome";
import {total} from "./genre";

const mainScreen = document.querySelector(`#root`);
const moduleWin = () => {
  mainScreen.innerHTML = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За 3 минуты и 25 секунд вы набрали ${total} баллов (8 быстрых), совершив 3 ошибки</p>
  <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
  <button class="replay" type="button">Сыграть ещё раз</button>
</section>`;
  const replay = document.querySelector(`.replay`);
  replay.addEventListener(`click`, () => {
    moduleWelcome();
  });
};


export {moduleWin};
