import { Component, OnDestroy, OnInit } from '@angular/core';
import { DiaryDataService } from '../shared/diary-data.componet';
import { DiaryEntry } from '../shared/diary-entry.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit, OnDestroy {

  diaryEntries: DiaryEntry[];
  diarySubscription = new Subscription();

  constructor(private diaryDataService: DiaryDataService, private router: Router) {}
  

  ngOnInit(): void {
    this.diarySubscription = this.diaryDataService.diarySubject.subscribe( diaryEntries => {
      this.diaryEntries = this.diaryEntries;
    })
    this.diaryEntries = this.diaryDataService.diaryEntries;
  }

  ngOnDestroy(): void {
    this.diarySubscription.unsubscribe();
  }

  onDelete(index: number){
    this.diaryDataService.onDelete(index);
    
  }

  onEdit(index: number) {
    this.router.navigate(['edit',index])
  }

  getDiaryEntry(index: number){
    return{...this.diaryEntries[index]}
  }

}
