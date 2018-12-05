
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

@Injectable()
export abstract class AbstractService<T>{
   protected protocolo: string = 'http';
   public ip: string = 'localhost';
   public porta: string = '8080';
   protected contextSistema: string = '';
   protected urlSistema: string = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextSistema;
   protected urlWebBase: string = '';

   constructor(protected router: Router, protected http: Http) {
      this.urlWebBase = this.urlSistema + this.getWebService();
   }

   public abstract getWebService(): string;

   public salvar(obj: any): Observable<T> {
      console.log(obj);
      return this.http.post(this.urlWebBase, obj).map(res => {
         return res.json();
      });
   }

   public findAll(): Observable<Array<T>> {
      return this.http.get(this.urlWebBase).map(res => {
         return res.json();
      });
   }

   public findById(id: number): Observable<T> {
      return this.http.get(this.urlWebBase + "/" + id).map(res => {
         return res.json();
      });
   }

   public remove(id: number): Observable<T> {
      return this.http.delete(this.urlWebBase + "/" + id).map(res => {
         return res.json();
      });
   }

   public update(obj : any): Observable<T>{
      return  this.http.patch(this.urlWebBase + "/" + obj.id, obj).map(res => {
         return res.json();
      });
   }

}
