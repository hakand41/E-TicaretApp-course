import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  template: "<router-outlet></router-outlet>",
  standalone: true
})
export class AppComponent {
  
}
