import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChecklistPage} from './checklist';

@NgModule({
    declarations: [
        ChecklistPage,
    ],
    imports: [
        IonicPageModule.forChild(ChecklistPage),
    ],
})
export class ChecklistPageModule {
}
