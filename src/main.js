// import {changeScreen} from './util.js';
// import {element} from './welcome';
import WelcomeView from './welcome';
import { changeScreen } from './util';

const welcomeScreen = new WelcomeView();
const screenWelcome = welcomeScreen.create();
changeScreen(screenWelcome);


// changeScreen(element);

