import { Component } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})

export class TogglerComponent {
  isTextVisible = true;
  clickLog = [];
  randomthing = "this is a random thing";

  toggleVisibility() {
    this.isTextVisible = !this.isTextVisible;
    this.clickLog.push(
      `[${Date.now()}]: Visible: ${this.isTextVisible}`
    );
  }

  shouldApplyColor(index) {
    return index >= 4;
  }

  getColor(index) {
    return this.shouldApplyColor(index) ? "DodgerBlue" : "";
  }
}
