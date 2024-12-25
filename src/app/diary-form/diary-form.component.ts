import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryDataService } from '../shared/diary-data.componet';
import { DiaryEntry } from '../shared/diary-entry.model';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit{

  //diaryForm: FormGroup<{ date: any; entry: any; }>;
  diaryForm: FormGroup;

  constructor(private diaryDataService: DiaryDataService, private router: Router) { }

  ngOnInit(): void {
    this.diaryForm = new FormGroup({
      "date": new FormControl(null , [Validators.required]),
      "entry": new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    const newEntry = new DiaryEntry(this.diaryForm.value.date, this.diaryForm.value.entry);
    this.diaryDataService.onAddDiaryEntry(newEntry);
    this.router.navigateByUrl("");

  }



}
