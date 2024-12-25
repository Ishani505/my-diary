import { Injectable } from "@angular/core";
import { DiaryEntry } from "./diary-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry("Dec 25th", "Entry 1"),
        new DiaryEntry("Dec 26th", "Entry 2"),
        new DiaryEntry("Dec 23rd", "Shared data service entry")
    ]

    onDelete(index: Number){
        this.diaryEntries.splice(+index, 1);
    }
}
