import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { DiaryEntry } from "./diary-entry.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    constructor(private http: HttpClient){}


    updateEntry(index: number, entry: DiaryEntry) {
            this.diaryEntries[index] = entry;
            this.diarySubject.next(this.diaryEntries);

            /* this.http.put<{message: string}>('http://localhost:3000/update-entry/' + id, entry).subscribe((jsonData) => {
                console.log(jsonData.message);
                this.getDiaryEntries();
            }) */
        }
    

    public diarySubject = new Subject<DiaryEntry[]>();
    private diaryEntries: DiaryEntry[] = [];

    /* onDelete(index: Number){
        this.diaryEntries.splice(+index, 1);
        this.diarySubject.next(this.diaryEntries);
    } */

    onDeleteEntry(id: Number){
        this.diaryEntries.splice(+id, 1);
        this.diarySubject.next(this.diaryEntries);

        /* this.http.delete<{message: string}>('http://localhost:3000/remove-entry/' + id).subscribe((jsonData) => {
            console.log(jsonData.message);
            this.getDiaryEntries();
            }) */
    }

    
    getDiaryEntries(){
        this.http.get<{diaryEntries: DiaryEntry[]}>('http://localhost:3000/diary-entries').subscribe((jsonData) => {
            this.diaryEntries = jsonData.diaryEntries;
            this.diarySubject.next(this.diaryEntries);
        })
    }
    
    getDiaryEntry(id: number){
      
        return{...this.diaryEntries[id]};
    }

   

    onAddDiaryEntry(diaryEntry: DiaryEntry){
        this.diaryEntries.push(diaryEntry);
        this.diarySubject.next(this.diaryEntries)
    }

    /* onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
        this.diaryEntries[paramId] = newEntry;
        this.diarySubject.next(this.diaryEntries);
      } */
       

}
