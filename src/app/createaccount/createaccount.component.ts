import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  public accountForm:FormGroup= new FormGroup(
    {
      createdAt:new FormControl(),
      account_name:new FormControl(),
      available_balance:new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
    }
  )
  constructor() { }

  ngOnInit(): void {
  }

}
