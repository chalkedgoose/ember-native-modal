import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { set } from '@ember/object';
import { render, setupOnerror, find, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | dialog-helper', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.open = false;
  });

  test('it renders', async function (assert) {
    await render(hbs`
    <div>
      <dialog data-test-dialog {{dialog-helper open=this.open}}></dialog>
      <p data-test-p>Content outside of dialog</p>
    </div>
    `);
    const dialogElem = find('[data-test-dialog]');

    assert.notOk(dialogElem.open, 'The dialog element is disabled');
    assert.dom('[data-test-p]').hasText('Content outside of dialog');
  });

  test('it renders and behaves properly', async function (assert) {
    await render(hbs`
      <div>
        <dialog data-test-dialog {{dialog-helper open=this.open}}>
          <p>Dialog Contents</p>
        </dialog>
      </div>
    `);
    const dialogElem = find('[data-test-dialog]');
    assert.notOk(dialogElem.open, 'The dialog element is disabled');
    set(this, 'open', true);
    await settled();
    assert.ok(dialogElem.open, 'The dialog element is open');
    set(this, 'open', false);
    await settled();
    assert.notOk(dialogElem.open, 'The dialog element is disabled');
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
    await render(hbs`<div {{dialog-helper open=this.open}}></div>`);
  });
});
