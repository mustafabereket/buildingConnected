import {asNativeElements, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ApiService} from './api.service';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  searchInput = '';
  resultArr: any[] = [];
  errorMessage = '';
  loading = false;
  selectedArt: any;
  @ViewChild('myModal', {static: false}) modal;
  private searchInputChanged: Subject<string> = new Subject<string>();
  private searchInputChangeSubscription: Subscription;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.resultArrSubscription.subscribe(result => {
      if (this.searchInput === result.text && result.type === '200') {
        this.resultArr = result.values;
        this.loading = false;
      }
      if (result.type !== '200') {
        this.errorMessage = result.values.pop().title;
        this.loading = false;
      }
    });

    this.searchInputChangeSubscription = this.searchInputChanged
      .pipe(
        debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe(newInput => {
        this.resultArr = [];
        this.errorMessage = '';
        if (newInput !== '') {
          this.loading = true;
          this.triggerSearch(newInput);
          console.log('search initiated');
        }
      });
  }

  triggerSearch(input: string) {
    this.api.search(input).subscribe(res => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.api.resultArrSubscription.unsubscribe();
    this.searchInputChanged.unsubscribe();
  }

}
