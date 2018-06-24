import { NgModule } from "@angular/core";
import { UixLightNotifierComponent } from "./uix-light-notifier/uix-light-notifier.component";
import { UixLightNotifierService } from "./uix-light-notifier.service";

@NgModule({
  imports: [],
  declarations: [UixLightNotifierComponent],
  providers: [UixLightNotifierService],
  exports: [UixLightNotifierComponent]
})
export class UixLightNotifierModule {}
