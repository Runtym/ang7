import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  bi:Board = new Board();
  constructor(private _router:ActivatedRoute,private _bs:BoardService) { 

    this._router.params.subscribe(param=>{
      this.bi.biType = param['biType'];
    })
  }

  ngOnInit() {
  }
  doInsert(){
    this._bs.addBoardInfo(this.bi).subscribe(res=>{
      console.log(res);
    });
  }
  getFiles(evt){
    this.bi.biFile = evt.target.files[0];
  }
}
