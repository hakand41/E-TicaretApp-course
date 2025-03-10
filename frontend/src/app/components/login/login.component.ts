import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ValidDirective } from '../../common/directives/valid.directive';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './services/auth.service';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule, ValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _auth: AuthService,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) {
    
   }


  login(form:NgForm){
    if(form.valid){
      let model = new LoginModel();
      model.email = form.controls["email"].value;
      model.password = form.controls["password"].value;

      this._auth.login(model, res=>{
        this._toastr.success("Login successful");
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        this._router.navigateByUrl("/");
      })
    }
  }
}
