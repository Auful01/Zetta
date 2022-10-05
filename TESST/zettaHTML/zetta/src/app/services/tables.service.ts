import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) { }

  getTableData() {
    return this.http.get('http://localhost:3000/data');
  }

  postTableData(data) {
    return this.http.post('http://localhost:3000/data', data);
  }

  deleteTableData(id) {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
}
