import Modifier from 'ember-modifier';
import { assert } from '@ember/debug';

interface ModalHelperModifierSignature {
  Args: {
    Named: {
      open: boolean;
    };
  };
  Element: HTMLDialogElement;
}

/**
 *
 * @example
 * <dialog {{ember-native-modal$modal-helper open=true}}></dialog>
 */
export default class ModalHelperModifier extends Modifier<ModalHelperModifierSignature> {
  modify(
    element: HTMLDialogElement,
    _positional: [],
    named: { open: boolean }
  ): void {
    assert(
      'Element must be an instance of the HTMLDialogElement',
      element instanceof HTMLDialogElement
    );

    if (named.open) {
      element?.showModal();
    } else {
      element?.close();
    }
  }
}
