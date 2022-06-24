import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
  onSubmit() {
    console.log(this.profileForm.value);
  }
  skillexps = [
    { skill: 'react', exp: '2' },
    { skill: 'swift', exp: '2' },
    { skill: 'kotlin', exp: '3' },
  ];
  constructor(private fb: FormBuilder) {}

  profileFB = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([]),
  });

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }
  get aliases() {
    return this.profileFB.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.aliases.removeAt(i);
  }
  ngOnInit(): void {
    this.skillexps.forEach((skillexp) => {
      this.aliases.push(this.fb.group(skillexp));
    });
  }

  onSubmitFB() {
    console.log(this.profileFB.value);
  }
}
