import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth.service';

// import { SocialAuthService } from "angularx-social-login";
// import { SocialUser } from 'angularx-social-login';
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
// import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup

  constructor(private auth: AuthService, private router : Router) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('',[Validators.required]),
      matKhau: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    })
   }
  ngOnInit(): void {
    
  }

  dangNhap(){
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return;

    // console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      next: res => console.log(res),
      error: err => console.log(err.error),
      complete: () => {
        console.log('Đăng nhập thành công');
        this.router.navigate(['/'])
      }
    });
  }

}
