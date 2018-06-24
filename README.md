# UixLightNotifier

A basic message service and component for Angular 6 apps.

## Quick Start

### Install

```bash
npm i --save uix-light-notifier
```

### Add the styles

The class is `unotificationi` you can change using css/scss its style, e.g. :

```
.unotification{
  background-color: red;
}
```

### Import the module

```ts
// app.module.ts...
import { UixLightNotifierModule } from "uix-light-notifier";
// ...
@NgModule({
  imports: [
    //...
    UixLightNotifierModule
  ]
})
export class AppModule {}
```

### Place the `UixLightNotifierComponent` in your app component

Put `<uix-light-notifier></uix-light-notifier>` somewhere.

```html
<!-- app.component.html -->
<router-outlet></router-outlet>
<uix-light-notifier></uix-light-notifier>
```

### Use `UixLightNotifierService` to show messages

```ts
import { UixLightNotifierService } from "uix-light-notifier";
//...
export class SomeComponent {
  constructor(private uixLightNotifierService: UixLightNotifierService) {}
  show() {
    this.uixLightNotifierService.show("My Message");
  }
}
```

#### Example

![Alt text](demo.gif?raw=true "Example")

## Authors

- **Mauricio Joost Wolff** - _Initial work_ - [GitHub](https://github.com/thiswallz)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
