
// import {changeScreen, render} from './util';
// import {elementGenre, elementHeaderGenre} from './genre';
import AbstractView from './view';

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="welcome">
    // <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    // <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    // <h2 class="welcome__rules-title">Правила игры</h2>
    // <p class="welcome__text">Правила просты:</p>
    // <ul class="welcome__rules-list">
    //   <li>За&nbsp;5&nbsp;минут нужно ответить на&nbsp;все вопросы.</li>
    //   <li>Можно допустить 3 ошибки.</li>
    // </ul>
    // <p class="welcome__text">Удачи!</p>
    // </section>`;
  }


}

const welcomeScreen = new WelcomeView();
console.log(welcomeScreen)
// console.log(welcomeScreen.create());


// const moduleWelcome = `<section class="welcome">
// <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
// <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
// <h2 class="welcome__rules-title">Правила игры</h2>
// <p class="welcome__text">Правила просты:</p>
// <ul class="welcome__rules-list">
//   <li>За&nbsp;5&nbsp;минут нужно ответить на&nbsp;все вопросы.</li>
//   <li>Можно допустить 3 ошибки.</li>
// </ul>
// <p class="welcome__text">Удачи!</p>
// </section>`;
// const element = render(moduleWelcome);
// const play = element.querySelector(`.welcome__button`);

// play.addEventListener(`click`, () => {
//   changeScreen(elementGenre);
//   elementGenre.prepend(elementHeaderGenre);
// });


// export {element};

