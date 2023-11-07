import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  apiData: any;
  products:any;
  constructor(private apiService: ApiService){}

  
    ngOnInit() {
      this.apiService.getData().subscribe((res: any) => {
        this.apiData = res;
        console.log(this.apiData);  
      });
  }

}
