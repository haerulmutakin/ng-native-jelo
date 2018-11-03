import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  isLoginPage = true;

  constructor(
    private page: Page,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('this is login');
    this.page.actionBarHidden = true;
  }

  onSignUpTap() {
    this.isLoginPage = !this.isLoginPage;
  }

  onSubmit() {
    this.router.navigate(['application'], { relativeTo: this.activatedRoute});
    console.log('login is touched');
  }

}
