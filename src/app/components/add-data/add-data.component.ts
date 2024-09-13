import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {DataService} from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {
  dataForm: FormGroup;
  dataList: { datetime: string, temperature: number }[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dataForm = this.fb.group({
      datetime: ['', [Validators.required, this.pastDateValidator]],
      temperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]]
    });
  }

  // Custom Validator: Check if datetime is in the past
  pastDateValidator(control: any): { [key: string]: any } | null {
    const date = new Date(control.value);
    return date < new Date() ? null : { futureDate: true };
  }

  // Add data to the list and share it via the service
  addData() {
    if (this.dataForm.valid) {
      this.dataService.addData(this.dataForm.value);
      this.dataList.push(this.dataForm.value);
      this.dataForm.reset();
    }
  }
}


/**import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  dataForm: FormGroup;
  dataList: { datetime: string, temperature: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      datetime: ['', [Validators.required, this.pastDateValidator]],
      temperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]]
    });
  }

  pastDateValidator(control: AbstractControl): { [key: string]: any } | null {
    const date = new Date(control.value);
    return date < new Date() ? null : { futureDate: true };
  }

  addData() {
    if (this.dataForm.valid) {
      this.dataList.push(this.dataForm.value);
      this.dataForm.reset();
    }
  }
}
**/