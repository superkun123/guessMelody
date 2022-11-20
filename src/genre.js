import {render, changeScreen, random} from './util.js';
import {elementArtist} from './game-artist';
import {dataMusic} from './data-music';
import {question} from './data';
const initialState = {
  timeMin: `04`,
  timeSec: `00`,
  lives: 3
};

let currentQuestion = question.questionGenre[random(0, 5)];
const genreHeader = `<header class="game__header">
<a class="game__back" href="#">
  <span class="visually-hidden">Сыграть ещё раз</span>
  <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
</a>

<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle class="timer__line" cx="390" cy="390" r="370"
          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
</svg>

<div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
  <span class="timer__mins">${initialState.timeMin}</span>
  <span class="timer__dots">:</span>
  <span class="timer__secs">${initialState.timeSec}</span>
</div>

<div class="game__mistakes">
  <div class="wrong"></div>
  <div class="wrong"></div>
  <div class="wrong"></div>
</div>
</header>`;


const moduleGenre = `<section class="game game--genre">
<section class="game__screen">
  <h2 class="game__title">Выберите ${currentQuestion} треки</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio><source src="${dataMusic[random(0, 5)].src}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play track_btn_first" type="button"></button>
      <div class="track__status">
        <audio  class="audio">
        <source src="${dataMusic[random(0, 5)].src}">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--pause" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${dataMusic[random(0, 5)].src}">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
        <source src="${dataMusic[random(0, 5)].src}">
        </audio>
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


const elementGenre = render(moduleGenre);
const elementHeaderGenre = render(genreHeader);
const firstPlay = elementGenre.querySelector(`.audio`);
let playBtn = elementGenre.querySelector(`.track_btn_first`);
const answerBtn = elementGenre.querySelector(`.game__submit`);
answerBtn.setAttribute(`disabled`, `disabled`);

playBtn.addEventListener(`click`, (event) => {
  console.log(`click`);
  if (event.target.classList.contains(`track_btn_first`)) {
    firstPlay.play();
    event.target.classList.add(`track__button--pause`);
    event.target.classList.remove(`track_btn_first`);
  } else if (event.target.classList.contains(`track__button--pause`)) {
    firstPlay.pause();
    event.target.classList.add(`track_btn_first`);
    event.target.classList.remove(`track__button--pause`);
  }
});

const answerValue = [];
const resultModule = () => {
  const choiceAnswer = elementGenre.querySelectorAll(`.game__input`);
  for (let i = 0; i < choiceAnswer.length; i++) {
    choiceAnswer[2].classList.add(`true__answer`);
    choiceAnswer[i].addEventListener(`click`, (event) => {
      answerBtn.removeAttribute(`disabled`, `disabled`);
      if (event.target.classList.contains(`true__answer`) && event.target.checked) {
        answerValue.push(1);
      } else if (event.target.checked) {
        answerValue.push(-2);
      } else {
        answerValue.push(0);
      }
    });
  }
  return answerValue;
};

let answer = resultModule();

function result() {
  answer = answer.reduce(function (previousValue, value) {
    return previousValue + value;
  });
  return `Вы набарли ${answer} баллов`;
}


answerBtn.addEventListener(`click`, () => {
  changeScreen(elementArtist);
  console.log(result());
});


export {elementGenre, elementHeaderGenre};
export {resultModule};


