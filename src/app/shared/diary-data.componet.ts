import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    public diarySubject = new Subject<DiaryEntry[]>();

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry("Dec 25th", "Entry 1"),
        new DiaryEntry("Dec 26th", "Entry 2"),
        new DiaryEntry("Dec 23rd", "Shared data service entry")
    ]

    onDelete(index: Number){
        this.diaryEntries.splice(+index, 1);
        this.diarySubject.next(this.diaryEntries);
    }

    onAddDiaryEntry(diaryEntry: DiaryEntry){
        this.diaryEntries.push(diaryEntry);
        this.diarySubject.next(this.diaryEntries)
               }
       

}
