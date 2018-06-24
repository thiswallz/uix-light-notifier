import { Component } from "@angular/core";
import { UixLightNotifierService } from "../uix-light-notifier.service";
@Component({
  selector: "uix-light-notifier",
  templateUrl: "./uix-light-notifier.component.html",
  styleUrls: ["./uix-light-notifier.component.css"]
})
export class UixLightNotifierComponent {
  message: string;
  showClass: string;

  private pressed: boolean = false;

  constructor(private uixLightNotifierService: UixLightNotifierService) {
    this.uixLightNotifierService.activate.subscribe(value => {
      this.message = value;
      if (!this.pressed) {
        this.showClass = "show";
        setTimeout(() => {
          this.showClass = "";
          this.pressed = false;
        }, 4500);
        this.pressed = true;
      }
    });
  }
}
