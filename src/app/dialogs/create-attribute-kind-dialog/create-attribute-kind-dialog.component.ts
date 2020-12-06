import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-attribute-kind-dialog',
  templateUrl: './create-attribute-kind-dialog.component.html',
  styleUrls: ['./create-attribute-kind-dialog.component.scss'],
})
export class CreateAttributeKindDialogComponent implements OnInit {
  attributeKindFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateAttributeKindDialogComponent>
  ) {}

  ngOnInit(): void {
    this.attributeKindFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      kind: 'ultimate'
    });
  }

  
  submit() {
    this.dialogRef.close(this.attributeKindFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }
}
