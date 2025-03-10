import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgxSpinnerModule],
  template: `<router-outlet></router-outlet>
  <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff" type = "line-spin-clockwise-fade" [fullScreen] = "true"><p style="color: white" > Loading... </p></ngx-spinner>`,
  standalone: true
})
export class AppComponent {
  
}
