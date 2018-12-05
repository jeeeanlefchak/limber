import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';
import { Contato } from '../models/contato';

@Injectable()
export class ContatoService extends AbstractService<Contato> {

    constructor(router: Router, http: Http) {
        super(router, http);

    }

    public getWebService(): string {
        return 'contact';
    }
}
