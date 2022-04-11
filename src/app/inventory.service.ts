import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private httpClient: HttpClient) { }

  public GetInventory(): Observable<any> {
    return this.httpClient
      .get<any>(environment.apiUrl + 'inventory')
     
  }

  public GetKernalInfo(value: number,selectedvalue : number): Observable<any> {
    return this.httpClient
      .get<any>(
        environment.apiUrl +
        'Inventory/' +
        selectedvalue +'/'+ value
      )
      
  }
  
}
