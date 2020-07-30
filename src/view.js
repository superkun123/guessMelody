import {render} from './util';

export default class AbstrackView {

  get template() {
    throw new Error(`Шаблон для отображения не найден`);
  }

  create() {
    return render(this.template.trim());
  }


  get element() {
    if (!this._element) {
      this._element = this.create();
      this.bind();
    }
    return this._element;
  }

}
