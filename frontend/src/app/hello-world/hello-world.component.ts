import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { HttpService } from '../http.service';
import { HelloWorldModalComponent } from '../shared/hello-world-modal/hello-world-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  userInputForm: FormGroup;
  constructor(public dialog: MatDialog, private http: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userInputForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      userInputControl: [null, Validators.required]
    });

  }
  openDialog() {
    this.isLoading = true;
    this.http.GetWelcomeMessage().subscribe(data => {
      this.isLoading = false;
      const dialogRef = this.dialog.open(HelloWorldModalComponent, {
        minWidth: '550px',
        data: data,
      });

    }, er => { this.isLoading = false })

  }
  onSubmit() {
    this.isSubmitting = true;
    const inputValue = this.userInputForm.controls['userInputControl'].value;
    this.http.PostUserInput({ "input": inputValue }).subscribe(data => {
      this.isSubmitting = false;
      const dialogRef = this.dialog.open(HelloWorldModalComponent, {
        width: '250px',
        data: { message: data._id },
      });

    }, err => {
      this.isSubmitting = false;

    });

  }
}

