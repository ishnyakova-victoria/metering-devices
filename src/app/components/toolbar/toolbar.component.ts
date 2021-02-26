import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../providers/authorization.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void { }

  public logOut(): void {
    this._authorizationService.logOut();

    this._router.navigate(['/authorization']);
  }
}
