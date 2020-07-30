
export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.classList.add(`wrapper`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};


const mainElement = document.querySelector(`.main`);

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


