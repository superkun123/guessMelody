import WelcomeView from './welcome';
import { changeScreen } from './util';

const welcomeScreen = new WelcomeView();
const screenWelcome = welcomeScreen.create();
changeScreen(screenWelcome);

