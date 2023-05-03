import Modifier from 'ember-modifier';
import { assert } from '@ember/debug';

interface DialogHelperModifierSignature {
  Args: {
    Named: {
      open: boolean;
    };
  };
  Element: HTMLDialogElement;
}

/**
 * @example
 * <dialog {{ember-native-modal$dialog-helper open=true}}></dialog>
 */
export default class DialogHelperModifier extends Modifier<DialogHelperModifierSignature> {
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
      element?.show();
    } else {
      element?.close();
    }
  }
}
