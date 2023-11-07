import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
