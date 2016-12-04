import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Letter } from './Letter';
import { LetterService } from './LetterService';

@Component({
    moduleId: module.id,
    selector: 'app-letter-editor',
    templateUrl: '/templates/shared/letter-editor'
})
export class LetterEditorComponent {

    letter = new Letter();

    constructor(private _letterServie: LetterService) {  }

    isValid(): boolean {
        return this.letter.body !== '';
    }

    onSend() {
        if (!this.isValid()) return;

        this._letterServie.add(this.letter).subscribe(
                () => {
                    this.letter.body = '';
                },
                () => {
                    console.error('Letter sending fail...');
                }
            );
    }

}