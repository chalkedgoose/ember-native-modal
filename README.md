# ember-native-modal

Introducing ember-native-modal: A Powerful, User-Friendly Modal Addon for Ember.js

The ember-native-modal addon is a robust and easy-to-implement solution for Ember.js applications that harnesses the power of native HTML5 dialog elements to offer a highly engaging, accessible, and seamless user experience. With ember-native-modal, effortlessly create interactive modals, dialog boxes, and pop-ups that integrate seamlessly with your Ember app, while maintaining high performance and clean, maintainable code.

## key features of ember-native-modal:

- Native HTML5 dialog support: Utilize the built-in capabilities of HTML5 dialog elements for an enhanced, out-of-the-box user experience.

- Easy Integration: Get up and running quickly with minimal configuration, effortlessly integrating modals and dialogs into your existing Ember.js application.

- Accessibility: Designed with accessibility in mind, ember-native-modal ensures your dialogs and modals are user-friendly and easy to navigate for all users, including those with disabilities.

- Customizable: Style and customize your dialogs and modals to match your application's look and feel, ensuring a consistent user experience across all interactions.

## Compatibility

- Ember.js v3.28 or above
- Ember CLI v3.28 or above
- Node.js v14 or above

## Installation

```
ember install ember-native-modal
```

## Usage

#### Example using a modal

```hbs
<dialog {{modal-helper open=this.isModalOpen}}>
  <div>
    <p>This is a modal</p>
    <button type="button" {{on "click" this.toggleModal}}>Close</button>
  </div>
</dialog>
<button type="button" {{on "click" this.toggleModal}}>open modal</button>
```

```js
export default class MyComponent extends Component {
  @tracked isModalOpen = false;

  @action
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
```

#### Example using a dialog

```hbs
<dialog {{dialog-helper open=this.isDialogOpen}}>
  <div>
    <p>This is a dialog</p>
    <button type="button" {{on "click" this.toggleDialog}}>Close</button>
  </div>
</dialog>
<button type="button" {{on "click" this.toggleDialog}}>open modal</button>
```

```js
export default class MyComponent extends Component {
  @tracked isDialogOpen = false;

  @action
  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
```

## HTMLDialogElement Feature Parity

| Feature                                             | Support |
| --------------------------------------------------- | ------- |
| Behavior related to `open` property                 | ✅      |
| Behavior related to `returnValue` property          | ❌      |
| Behavior related to `close()` method                | ✅      |
| Behavior related to `show()` method for dialogs     | ✅      |
| Behavior related to `showModal()` method for modals | ✅      |
| Behavior related to `cancel` event                  | ❌      |
| Behavior related to `close` event                   | ❌      |

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
