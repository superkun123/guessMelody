import {element} from "./welcome";
import {render, changeScreen} from "./util";


const moduleWin = `<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За 3 минуты и 25 секунд вы набрали       баллов (8 быстрых), совершив 3 ошибки</p>
  <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
  <button class="replay" type="button">Сыграть ещё раз</button>
</section>`;

const elementWin = render(moduleWin);

const replay = elementWin.querySelector(`.replay`);

replay.addEventListener(`click`, () => {
  changeScreen(element);
});


export {elementWin};
