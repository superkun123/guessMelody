import {dataMusic} from './data-music';

function genre() {
  let arrayGenre = [];
  for (let value of dataMusic) {
    arrayGenre.push(value.genre);
  }
  return arrayGenre;
}

function artists() {
  let arrayArtists = [];
  for (let value of dataMusic) {
    arrayArtists.push(value.artist);
  }
  return arrayArtists;
}

let genreItems = genre();
let artistItems = artists();

console.log(genreItems);
console.log(artistItems);

const question = {
  questionGenre: genreItems,
  questionArtists: artistItems
};


export {question};
