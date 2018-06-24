import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UixLightNotifierService {
  @Output() activate: EventEmitter<string> = new EventEmitter();

  constructor() {}
  show(message: string): void {
    this.activate.emit(message);
  }
}
