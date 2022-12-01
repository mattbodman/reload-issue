import { Component, OnInit } from '@angular/core';
import { DiagService } from "../diag.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  data$: Observable<string[]>;

  constructor(private diagService: DiagService) {
    this.data$ =  this.diagService.fetchData();
  }

  ngOnInit(): void {

  }

}
