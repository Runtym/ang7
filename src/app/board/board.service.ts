import { Injectable } from '@angular/core';
import { Board } from './board';
import { ajax } from 'rxjs/ajax';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl:string = 'http://localhost:88/';
  constructor(private _http:HttpClient) { 
    console.log('boardService');
  }

  getBoardInfoService(board:Board){
    return ajax.get(this.baseUrl + 'boardinfos');
  }

  getBoardInfo(biNum:number) {
    return ajax.get(this.baseUrl + 'boardinfo?biNum=' + biNum);
  }

  addBoardInfo(board:Board){
    const url = this.baseUrl + 'boardinfo';
    const formData = new FormData();
    for(var key in board){
      formData.append(key, board[key]);
    }
    console.log(formData);
    const req = new HttpRequest('POST', url, formData);
    return  this._http.request(req);
  }
}
