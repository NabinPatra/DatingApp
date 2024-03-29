import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getValues();
  }
  // tslint:disable-next-line: typedef
  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(Response => {
      this.values = Response;
  }, error => {
    console.log(error);
  });
  }
}
