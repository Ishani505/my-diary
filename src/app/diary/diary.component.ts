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

  diaryEntries: DiaryEntry[] = [];
  diaryEntriesSub = new Subscription();

  constructor(private diaryDataService: DiaryDataService, private router: Router) {}

  ngOnDestroy(): void {
    this.diaryEntriesSub.unsubscribe();
  }
  

  ngOnInit(): void {
    this.diaryDataService.getDiaryEntries();
    this.diaryEntriesSub = this.diaryDataService.diarySubject.subscribe(entries => {
      this.diaryEntries = entries;
    })
    
  }

  

  onDelete(id: string){
    this.diaryDataService.onDeleteEntry(id);
    
  }

  onEdit(id: string) {
    this.router.navigate(['edit',id])
  }

  /*getDiaryEntry(index: number){
    return{...this.diaryEntries[index]}
  }*/

  /*getDiaryEntry(index: number): DiaryEntry {
    return this.diaryEntries[index];
  }*/

}
