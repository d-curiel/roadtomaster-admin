import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-attribute-kind-dialog',
  templateUrl: './create-attribute-kind-dialog.component.html',
  styleUrls: ['./create-attribute-kind-dialog.component.scss'],
})
export class CreateAttributeKindDialogComponent implements OnInit {
  attributeKindFormGroup: FormGroup;
  kinds = ['integer', 'double', 'percentaje', 'special'];
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateAttributeKindDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.attributeKindFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      kind: this.data.kind,
    });
  }

  submit() {
    this.dialogRef.close(this.attributeKindFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }
}
