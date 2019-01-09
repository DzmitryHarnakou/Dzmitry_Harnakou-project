import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AxiosDmitryService {

  constructor() { }

  public getRequest(url:string) {
    var that = this;
    return new Promise((resolve, reject) => {
        that.requestHandler(url, 'GET').then(responce => resolve(responce)).catch(err => reject(err));
    });
  }

  public requestHandler(url:string, method:string, payload?:any) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onload = function () {
            if (this.status === 200 || this.status === 201) {
                resolve(JSON.parse(this.response));
            } else {
                var error = new Error(this.statusText);
                error.name = String(this.status);
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        }

        if (payload) {
            xhr.send(payload);
        } else {
            xhr.send();
        }
    });
  }
}
