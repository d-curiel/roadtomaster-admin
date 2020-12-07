import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateAttributeKindDialogComponent } from 'src/app/dialogs/create-attribute-kind-dialog/create-attribute-kind-dialog.component';
import { AttributeKindService } from 'src/app/services/attribute-kind.service';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit {
  step = 0;
  traitFormGroup: FormGroup;
  traitSetsFormGroup : FormGroup;
  traitAttributes;
  traitKinds = ['class','origin'];
  tiersSet = ['bronze','silver','gold','chromatic'];
  constructor(
    private _formBuilder: FormBuilder,
    private _attributeKindService: AttributeKindService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.traitFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required],
      kind: ['', Validators.required],
    });
    this.traitSetsFormGroup = this._formBuilder.group({
      sets: this._formBuilder.array([]),
    }); 
    this._attributeKindService.findByTrait().subscribe(
      (data) => {
        this.traitAttributes = data;
        console.log(data);
      },
      (error) => {}
    );
  }

  get getSets() {
    return this.traitSetsFormGroup.get('sets') as FormArray;
  }

  addSet(): void {
    this.getSets.push(this.createSet());
  }

  createSet(): FormGroup {
    return this._formBuilder.group({
      min: '',
      max: '',
      tier: '',
      attributes: this._formBuilder.array([]),
    });
  }

  getSetAttributes(index: number) {
    return this.getSets.at(index).get('attributes') as FormArray;
  }
  addAttribute(index : number){
    let attributes = this.getSets.at(index).get('attributes') as FormArray;
    attributes.push(this.createAttributeSet());
  }

  createAttributeSet(): FormGroup{
    return this._formBuilder.group({
      value: '',
      attribute: '',
    });
  }

  createAttributeKindTrait() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data ={
      kind: 'trait'
    }

    const dialogRef = this.dialog.open(
      CreateAttributeKindDialogComponent,
      dialogConfig,
      
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._attributeKindService.create(result).subscribe(
          (data) => {
            this.openSnackBar();
          },
          (error) => {}
        );
      }
    });
  }
  openSnackBar() {
    this._snackBar.open('Tipo de Atributo Creado: ', '', {
      duration: 3000,
    });
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
