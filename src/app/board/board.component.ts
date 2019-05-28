import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Board } from './board';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardList:Board[] = [];
  biType:number = 1;

  constructor(private _bs:BoardService,
    private _router:Router
    ) {
    this.findList(null);
  }
  findList(board:Board){
    this._bs.getBoardInfoService(board)
    .subscribe(res=>{
      this.boardList = res.response;      
    })
  }
  ngOnInit() {
  }

  goPage(url:string){
    this._router.navigate([url]);
  }
}
