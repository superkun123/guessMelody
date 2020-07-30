document.addEventListener(`DOMContentLoaded`, function () {

  const helloScreen = document.querySelector(`#welcome`).content.querySelector(`.welcome`);
  const mainScreen = document.querySelector(`#root`);
  const genre = document.querySelector(`#game-genre`).content.querySelector(`.game--genre`);
  const artist = document.querySelector(`#game-artist`).content.querySelector(`.game--artist`);
  const win = document.querySelector(`#result-success`).content.querySelector(`.result`);
  const loginWin = document.querySelector(`#result-login`).content.querySelector(`.login`);
  const loseTime = document.querySelector(`#fail-time`).content.querySelector(`.result`);
  const loseTry = document.querySelector(`#fail-tries`).content.querySelector(`.result`);
  const modalError = document.querySelector(`#modal-error`).content.querySelector(`.modal`);
  const modalConfirm = document.querySelector(`#modal-confirm`).content.querySelector(`.modal`);
  const screenArray = [helloScreen, genre, artist, win, loginWin, loseTime, loseTry, modalError, modalConfirm];

  const screenAppend = () => {
    for (let i = 0; i < screenArray.length; i++) {
      mainScreen.append(screenArray[i]);
      screenArray[i].style.display = `none`;
      screenArray[0].style.display = `flex`;
    }
  };

  screenAppend();


  let b = 0;
  document.addEventListener(`keydown`, (KeyboardEvent) => {
    const keyName = KeyboardEvent.key;
    if (keyName === `ArrowRight` && b < screenArray.length - 1) {
      b = b + 1;
      screenArray[b].style.display = `flex`;
      screenArray[b - 1].style.display = `none`;
    } else if (keyName === `ArrowLeft` && b >= 1) {
      b = b - 1;
      screenArray[b].style.display = `flex`;
      screenArray[b + 1].style.display = `none`;

    }
  });


});
