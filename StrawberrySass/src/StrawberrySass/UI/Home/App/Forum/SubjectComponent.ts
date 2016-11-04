import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Subject } from './Subject';
import { SubjectService } from './SubjectService';

@Component({
    moduleId: module.id,
    selector: 'app-forum-subject',
    templateUrl: '/templates/home/forum/subject',
    styleUrls: ['SubjectComponent.css']
})
export class SubjectComponent implements OnInit {

    editMode = false;

    subject: Subject;

    //subjectForm: FormGroup;

    constructor(
        private _subjectsService: SubjectService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.buildForm();

        this._route.params.forEach((params: Params) => {
            const id = params['id'];

            if (id === 'new') {
                this.editMode = true;

                this.subject = new Subject();
                this.subject.title = 'Nouveau titre';
                this.subject.description = 'Nouvelle description';

                return;
            }

            this._subjectsService.get(id).subscribe(
                (subject: Subject) => this.subject = subject,
                () => console.error('GET Subject fail...')
            );
        });
    }

    onValueChanged(data?: any) {
        //if (!this.subjectForm) { return; }

        //const form = this.subjectForm;

        //for (const field in this.subjectForm) {

        //    this.formErrors[field] = '';
        //    const control = form.get(field);

        //    console.log(control);
        //    if (control && control.dirty && !control.valid) {

        //        const messages = this.validationMessages[field];
        //        console.log(this.validationMessages[field]);

        //        for (const key in control.errors) {
        //            this.formErrors[field] += messages[key] + ' ';
        //        }
        //    }
        //}
    }

    onSubmit() {
        //this._accountService.register(this.registerForm.value).subscribe(
        //    () => {
        //        this._router.navigate(['/welcome']);
        //    },
        //    () => {
        //        console.error('Registration fail...');
        //    }
        //);
    }

    buildForm(): void {
        //this.subjectForm = this._formBuilder.group({
        //    'title': [
        //        this.subject.title,
        //        [
        //            Validators.required,
        //            Validators.maxLength(50),
        //            Validators.minLength(5)
        //        ]
        //    ],
        //    'description': [
        //        this.subject.description,
        //        [
        //            Validators.required,
        //            Validators.maxLength(100),
        //            Validators.minLength(10)
        //        ]
        //    ],
        //    'content': [
        //        this.subject.content,
        //        [
        //            Validators.required,
        //            Validators.minLength(25),
        //            Validators.maxLength(1000)
        //        ]
        //    ]
        //});

        //this.subjectForm.valueChanges
        //    .subscribe((data: any) => this.onValueChanged(data));

        //this.onValueChanged();
    }

    formErrors = {
        //'title': '',
        //'description': '',
        //'content': ''
    };

    validationMessages = {
        //'title': {
        //    'required': 'L\'Adresse courriel obligatoire.',
        //    'maxlength': 'Le nom d\'usager doit contenir au maximum 100 caractères.',
        //    'minlength': 'Le nom d\'usager doit contenir au minimum 4 caractères.'
        //},
        //'description': {
        //    'required': 'Le nom d\'usager est obligatoire.',
        //    'maxlength': 'Le nom d\'usager doit contenir au maximum 100 caractères.',
        //    'minlength': 'Le nom d\'usager doit contenir au minimum 4 caractères.'
        //},
        //'content': {
        //    'required': 'Le mot de passe est obligatoire.',
        //    'maxlength': 'Le nom d\'usager doit contenir au maximum 100 caractères.',
        //    'minlength': 'Le nom d\'usager doit contenir au minimum 4 caractères.'
        //}
    };
}