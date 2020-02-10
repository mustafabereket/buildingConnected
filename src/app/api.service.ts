import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, Subject, throwError} from 'rxjs';
import {catchError, filter, map, switchMap, take, takeUntil} from 'rxjs/operators';

import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  resultArrSubscription: Subject<any> = new Subject<any>();
  resultArr = [];
  constructor(private httpService: HttpClient) { }

  search(input: string) {
    return this.httpService.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + input).pipe(
      // requirement: It should never return results that dont match with the searchInput
      // switchMap allows us to only return the most recent query
      // but also to minimize any potential displays I also used a hashMap
      // to map the results with the actual searchText
      switchMap((result: {total: number, objectIDs: number[] }) => {
        const temp = {text: input, values: [], type: '200'};
        this.resultArr = [];
        if (!result.objectIDs) {
          this.resultArrSubscription.next({type: '404', text: input, values: [{title: 'Error: No results found' }]});
        } else {
          // requirement: It should never return more than 20 items
          const items = result.objectIDs.slice(0, result.total > 20 ? 20 : result.total);
          return items.map(obj => {
            this.httpService.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + obj)
              .subscribe(artPiece => {
                temp.values.push(artPiece);
                this.resultArrSubscription.next(temp);
              }, (err) => {
                this.resultArrSubscription.next({type: '500', text: input, values: [{title: 'Error: Something went wrong: ' + err }]});
              });
          });
        }
      })
    );
  }
}
