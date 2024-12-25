import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{
    

    public diarySubject = new Subject<DiaryEntry[]>();

    private diaryEntries: DiaryEntry[] = [
        new DiaryEntry(1,"Dec 25th", "Entry 1"),
        new DiaryEntry(2,"Dec 26th", "Entry 2"),
        new DiaryEntry(3,"Dec 23rd", "Shared data service entry"),
    ];

    onDelete(index: Number){
        this.diaryEntries.splice(+index, 1);
        this.diarySubject.next(this.diaryEntries);
    }

    onAddDiaryEntry(diaryEntry: DiaryEntry){
        this.diaryEntries.push(diaryEntry);
        this.diarySubject.next(this.diaryEntries)
    }

    
    getDiaryEntry(index: number){
      
        return{...this.diaryEntries[index]};
    }

    onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
        this.diaryEntries[paramId] = newEntry;
        this.diarySubject.next(this.diaryEntries);
      }
       

}
