import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { set } from '@ember/object';
import { render, setupOnerror, find, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | modal-helper', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.open = false;
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <div>
        <dialog data-test-modal {{modal-helper open=this.open}}>
        </dialog>
        <p data-test-p>Content outside of modal</p>
      </div>
    `);

    const modalElem = find('[data-test-modal]');

    assert.notOk(modalElem.open, 'The modal element is disabled');
    assert.dom('[data-test-p]').hasText('Content outside of modal');
  });

  test('it renders and behaves properly', async function (assert) {
    await render(hbs`
      <div>
        <dialog data-test-modal {{modal-helper open=this.open}}>
          <p>Modal Contents</p>
        </dialog>
      </div>
    `);
    const modalElem = find('[data-test-modal]');
    assert.notOk(modalElem.open, 'The modal element is disabled');
    set(this, 'open', true);
    await settled();
    assert.ok(modalElem.open, 'The modal element is open');
    set(this, 'open', false);
    await settled();
    assert.notOk(modalElem.open, 'The modal element is disabled');
  });

  test('it throws error when something other than a dialog element is used', async function (assert) {
    assert.expect(1);

    setupOnerror((error) => {
      assert.throws(
        () => {
          throw error;
        },
        /Assertion Failed: Element must be an instance of the HTMLDialogElement/,
        'The expected error is thrown'
      );
    });
    await render(hbs`<div {{modal-helper open=this.open}}></div>`);
  });
});
