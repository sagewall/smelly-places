import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-policy-acceptance',
  templateUrl: './policy-acceptance.component.html',
  styleUrls: ['./policy-acceptance.component.scss']
})
export class PolicyAcceptanceComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public acceptPolicies() {
    localStorage.setItem('smellyplaces.policiesAccepted', '2/3/2019');
    this.snackBar.dismiss();
  }

}
