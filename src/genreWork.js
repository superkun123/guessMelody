import {moduleArtists} from './game-artist.js';
import {moduleWelcome} from './welcome.js';

const mainScreen = document.querySelector(`#root`);
const moduleGenre = () => {
  mainScreen.innerHTML = `section class="game game--genre">
  <header class="game__header">
    <a class="game__back" href="#">
      <span class="visually-hidden">Сыграть ещё раз</span>
      <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle class="timer__line" cx="390" cy="390" r="370"
              style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
    </svg>

    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer__mins">05</span>
      <span class="timer__dots">:</span>
      <span class="timer__secs">00</span>
    </div>

    <div class="game__mistakes">
      <div class="wrong"></div>
      <div class="wrong"></div>
      <div class="wrong"></div>
    </div>Z dxthf j
  </header>

  <section class="game__screen">
    <h2 class="game__title">Выберите инди-рок треки</h2>
    <form class="game__tracks">
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
          <label class="game__check" for="answer-1">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
          <label class="game__check" for="answer-2">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--pause" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
          <label class="game__check" for="answer-3">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
          <label class="game__check" for="answer-4">Отметить</label>
        </div>
      </div>

      <button class="game__submit button" type="submit">Ответить</button>
    </form>
  </section>
</section>`;
  const toMainScreen = document.querySelector(`.game__back`);
  const answerBtn = document.querySelector(`.game__submit`);
  const choiceAnswer = document.querySelectorAll(`.game__input`);
  let answerValue = [];

  const resultModule = () => {
    answerBtn.setAttribute(`disabled`, `disabled`);
    for (let i = 0; i < choiceAnswer.length; i++) {
      choiceAnswer[2].classList.add(`true__answer`);
      choiceAnswer[i].addEventListener(`click`, (event) => {
        answerBtn.removeAttribute(`disabled`, `disabled`);
        answerBtn.addEventListener(`click`, () => {
          if (event.target.classList.contains(`true__answer`) && event.target.checked) {
            answerValue.push(1);
          } else if (event.target.checked) {
            answerValue.push(-2);
          } else {
            answerValue.push(`ytn`);
          }
          console.log(answerValue);
          moduleArtists();
          let summ = answerValue.reduce(function (previousValue, value) {
            return previousValue + value;
          });
          console.log(`Поздравляю, вы набрали - ${summ} баллов!`);
          return summ;
        });
      });
    }
  };

  resultModule();
  toMainScreen.addEventListener(`click`, () => {
    moduleWelcome();
  });


  answerBtn.addEventListener(`click`, () => {
    moduleArtists();
  });

};

export {moduleGenre};
