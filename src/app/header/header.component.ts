import {  Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  apiData!: any;
  constructor(private apiService: ApiService){}

  
    ngOnInit() {
      this.apiService.getData().subscribe((res: any) => {
        this.apiData = res.data
        console.log(this.apiData);
      });
  }

}
