import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{


    updateEntry(index: number, entry: DiaryEntry) {
            this.diaryEntries[index] = entry;
            this.diarySubject.next(this.diaryEntries);
        }
    

    public diarySubject = new Subject<DiaryEntry[]>();

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry(1,"Dec 25th", "Entry 1"),
        new DiaryEntry(2,"Dec 26th", "Entry 2"),
        new DiaryEntry(3,"Dec 23rd", "Shared data service entry")
    ]

    onDelete(index: Number){
        this.diaryEntries.splice(+index, 1);
        this.diarySubject.next(this.diaryEntries);
    }

    onDeleteEntry(id: Number){
        this.diaryEntries.splice(+id, 1);
        this.diarySubject.next(this.diaryEntries);
    }

    onAddDiaryEntry(diaryEntry: DiaryEntry){
        this.diaryEntries.push(diaryEntry);
        this.diarySubject.next(this.diaryEntries)
    }

    
    getDiaryEntry(index: number){
      
        return{...this.diaryEntries[index]};
        //return this.diaryEntries;
    }

    getDiaryEntries(){
      
        //return{...this.diaryEntries[index]};
        return this.diaryEntries;
    }

    onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
        this.diaryEntries[paramId] = newEntry;
        this.diarySubject.next(this.diaryEntries);
      }
       

}
