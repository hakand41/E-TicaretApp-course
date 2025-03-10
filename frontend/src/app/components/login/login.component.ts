import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../../common/directives/valid.directive';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule, ValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService
  ) {
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
    }, 5000);
    this._toastr.success("Welcome to the login page");
   }


  login(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }
}
