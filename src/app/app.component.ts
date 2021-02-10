import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkServiceService } from './network-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deshBoardData: any;

  constructor(
    private networkService: NetworkServiceService
  ) { }

  ngOnInit(): void {
   this.getDeshboardDAta();
  }

  getDeshboardDAta() {
    this.networkService.getSpaceXData().subscribe(data => {
      this.deshBoardData = data;
      console.log(this.deshBoardData);
    })
  }
}

