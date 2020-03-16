import {moduleGenre} from './genre.js';
import {moduleArtists} from './game-artist.js';
import {moduleWin} from './result-success.js';
import {moduleLoseTime} from './fail-time.js';
import {moduleLoseTries} from './fail-tries.js';
import {moduleWelcome} from './welcome.js';

moduleWelcome();

const play = document.querySelector(`.welcome__button`);


play.addEventListener(`click`, () => {
  moduleGenre();
  const logo = document.querySelector('#game-genre').content.querySelector('.game__logo');
  logo.addEventListener(`click`, () => {
    moduleWelcome();
  });
  const answerBtn = document.querySelector(`.game__submit`);
  const answerChecked = document.querySelectorAll(`.game__answer`);
  answerBtn.addEventListener(`click`, () => {
    moduleArtists();
    console.log(play)
    const answerArtists = document.querySelectorAll(`.artist`);

    for (let i = 0; i < answerArtists.length; i++) {
      answerArtists[i].addEventListener(`click`, () => {
        moduleWin();
        const replay = document.querySelector(`.replay`);
        // eslint-disable-next-line max-nested-callbacks
        replay.addEventListener(`click`, () => {
          moduleWelcome();
        });
      });
    }
  });

});
