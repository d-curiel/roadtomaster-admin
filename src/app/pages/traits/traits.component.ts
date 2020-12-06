import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss'],
})
export class TraitsComponent implements OnInit {
  step = 0;
  traitFormGroup: FormGroup;
  traitSetsFormGroup : FormGroup;
  traitKinds = ['class','origin'];
  tiersSet = ['bronze','silver','gold','chromatic'];
  constructor(
    private _formBuilder: FormBuilder,) {}

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
