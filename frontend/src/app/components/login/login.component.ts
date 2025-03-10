import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../../common/directives/valid.directive';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule, ValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _toastr: ToastrService
  ) {
    this._toastr.success("Welcome to the login page");
   }


  login(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }
}
