import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
  projectStatus = ['Stable', 'Critical', 'Finished']
  projectForm !: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required, Validators.email]
    })
  }


}
