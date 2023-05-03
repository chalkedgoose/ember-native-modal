import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalExampleComponent extends Component {
  @tracked isModalOpen = false;

  @action
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
