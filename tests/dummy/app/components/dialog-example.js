import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DialogExampleComponent extends Component {
  @tracked isDialogOpen = false;

  @action
  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
