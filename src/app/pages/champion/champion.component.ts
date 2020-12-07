import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateAttributeKindDialogComponent } from 'src/app/dialogs/create-attribute-kind-dialog/create-attribute-kind-dialog.component';
import { AttributeKindService } from 'src/app/services/attribute-kind.service';
import { TraitsService } from 'src/app/services/traits.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: true },
    },
  ],
})
export class ChampionComponent implements OnInit {
  costs = ['1', '2', '3', '4', '5'];
  tiers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  controlBindingAttr = [false, true, true, true, true, false, false, true, true, true];
  ultimateKinds = ['active', 'passive'];
  championAttributes;
  ultimateAttributes;
  championFormGroup: FormGroup;
  championAttributesFormGroup: FormGroup;
  ultimateFormGroup: FormGroup;
  ultimateAttributesFormGroup: FormGroup;
  traits: any;
  items: FormArray;
  step = 0;
  constructor(
    private _formBuilder: FormBuilder,
    private _traitService: TraitsService,
    private _attributeKindService: AttributeKindService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._traitService.getAll().subscribe(
      (data) => {
        this.traits = data;
      },
      (error) => {}
    );
    this._attributeKindService.findByChampion().subscribe(
      (data) => {
        this.championAttributes = data;
      },
      (error) => {},
      () => {
        this.championAttributes.forEach((championAttribute, index) => {
          this.addItem(championAttribute.id, index);
        });
      }
    );

    this._attributeKindService.findByUltimate().subscribe(
      (data) => {
        this.ultimateAttributes = data;
      },
      (error) => {}
    );

    this.championFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      icon: ['', Validators.required],
      splashart: ['', Validators.required],
      traits: ['', Validators.required],
    });
    this.ultimateFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      kind: ['', Validators.required],
      icon: ['', Validators.required]
    });
    this.ultimateAttributesFormGroup = this._formBuilder.group({
      attributes:  new FormArray([]),
    });
    this.championAttributesFormGroup = this._formBuilder.group({
      attributes: this._formBuilder.array([]),
    });
  }
  get getChampionAttributesForm() {
    return this.championAttributesFormGroup.get('attributes') as FormArray;
  }
  get ultimateAttributesArray() {
    return this.ultimateAttributesFormGroup.get('attributes') as FormArray;
  }

  addUltimateAttribute(): void {
    this.ultimateAttributesArray.push(this.createUltimateAttribute());
  }
  createUltimateAttribute(): FormGroup {
    return this._formBuilder.group({
      tier1: '',
      tier2: '',
      tier3: '',
      attributeKind: '',
    });
  }
  addItem(name, index): void {
    this.getChampionAttributesForm.push(this.createItem(name, index));
  }
  createItem(attribute, index): FormGroup {
    return this._formBuilder.group({
      attribute: attribute,
      tier1: '',
      tier2: '',
      tier3: '',
    });
  }

  returnAttributeName(id) {
    return this.championAttributes.find((attribute) => attribute.id === id)
      .name;
  }

  createAttributeKindUltimate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kind : 'ultimate'
    }

    const dialogRef = this.dialog.open(
      CreateAttributeKindDialogComponent,
      dialogConfig
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

  updateBinding(position){
    this.controlBindingAttr[position] = !this.controlBindingAttr[position];
   }
}
