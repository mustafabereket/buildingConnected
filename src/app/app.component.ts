import { Component } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchInput = '';
  resultArr: any[] = [];
  constructor(private api: ApiService) {
  }
  search() {
    this.api.search(this.searchInput).subscribe(async result => {
      if (result.total > 0) {
        this.resultArr = [];
        result.objectIDs.map( obj => {
          this.api.getResultObj(obj).subscribe(art => {
            this.resultArr.push(art);
          });
          console.log(this.resultArr);

        });
      }
    });
  }

}
