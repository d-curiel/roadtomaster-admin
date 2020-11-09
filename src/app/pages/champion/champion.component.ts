import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AttributeKindService } from 'src/app/services/attribute-kind.service';
import { TraitsService } from 'src/app/services/traits.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss'],
})
export class ChampionComponent implements OnInit {
  costs = ['1', '2', '3', '4', '5'];
  championAttributes;
  championFormGroup: FormGroup;
  champioAttributesFormGroup: FormGroup;
  ultimateFormGroup: FormGroup;
  traits: any;
  items: FormArray;
  step = 0;
  constructor(
    private _formBuilder: FormBuilder,
    private _traitService: TraitsService,
    private _attributeKindService: AttributeKindService
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
        this.championAttributes.forEach((championAttribute) => {
          this.addItem(championAttribute.id);
        });
      }
    );

    this.championFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      icon: ['', Validators.required],
      splashart: ['', Validators.required],
      traits: ['', Validators.required],
    });
    this.champioAttributesFormGroup = this._formBuilder.group({
      attributes: this._formBuilder.array([]),
    });
  }
  get getChampionAttributesForm(){ return this.champioAttributesFormGroup.get('attributes') as FormArray}
  addItem(name): void {
    this.items = this.champioAttributesFormGroup.get('attributes') as FormArray;
    this.items.push(this.createItem(name));
  }
  createItem(attribute): FormGroup {
    return this._formBuilder.group({
      attribute: attribute,
      tier1: '',
      tier2: '',
      tier3: '',
    });
  }

  returnAttributeName(id){
    return this.championAttributes.find(attribute => attribute.id === id).name;
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
