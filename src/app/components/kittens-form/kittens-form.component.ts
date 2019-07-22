import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatChipInputEvent } from '@angular/material';

import { ApiService } from 'src/app/shared/services/api.service';
import { Kitten } from 'src/app/shared/models/kitten';

@Component({
  selector: 'app-kittens-form',
  templateUrl: './kittens-form.component.html',
  styleUrls: ['./kittens-form.component.scss']
})
export class KittensFormComponent implements OnInit {
  private kittenParents: string[] = [];
  private kittenId: string;

  public editMode: boolean = false;
  public kittenForm: FormGroup;
  public config = {
    isSelectable: true,
    isRemovable: true,
    isAddedOnBlur: true,
  };

  private initForm(): void {
    this.kittenForm = new FormGroup({
      kitten_name: new FormControl('', Validators.required),
      kitten_breed: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      kitten_parents: new FormControl(this.kittenParents),
      kitten_dob: new FormControl(''),
    });
  }

  private setFormValue(data: Kitten): void {
    this.kittenParents = data.kitten_parents;
    const kitten = {
      kitten_name: data.kitten_name,
      kitten_breed: data.kitten_breed,
      country: data.country,
      kitten_parents: this.kittenParents,
      kitten_dob: data.kitten_dob,
    }
    this.kittenForm.setValue(kitten);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private kittensApi: ApiService
  ) {
    this.initForm();
  }

  public ngOnInit(): void {
    this.editMode = /edit-kitten/.test(this.router.url);
    this.kittenId = this.route.snapshot.paramMap.get('id');

    if (this.editMode) {
      this.kittensApi
      .getKitten(this.kittenId)
      .subscribe(data => {
        this.kittenParents = data.kitten_parents;
        this.setFormValue(data);
      });
    }
  }

  public formatDate(event: any): void {
    const convertDate = new Date(event.target.value).toISOString().substring(0, 10);
    this.kittenForm.get('kitten_dob').setValue(convertDate, { onlyself: true });
  }

  public handleError(controlName: string, errorName: string): boolean {
    return this.kittenForm.controls[controlName].hasError(errorName);
  }  

  public addParent(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim() && this.kittenParents.length < 3) {
      this.kittenParents.push(value.trim())
    }
    if (input) { input.value = ''; }
  }

  public removeParent(parent: string): void {
    const index = this.kittenParents.indexOf(parent);
    if (index >= 0) { this.kittenParents.splice(index, 1); }
  }

  public submitForm(): void {
    if (this.kittenForm.invalid) { return; }
    const kitten = this.kittenForm.value;
    this.kittenForm.reset();
    if (this.editMode) {
      this.kittensApi
        .updateKitten(this.kittenId, kitten)
        .subscribe(res => this.ngZone.run(() => this.router.navigate(['/kittens'])));
    } else {
      this.kittensApi
        .addKitten(kitten)
        .subscribe(res => this.ngZone.run(() => this.router.navigate(['/kittens'])));
    }
  }

}
