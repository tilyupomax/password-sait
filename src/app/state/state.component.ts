import { Component, OnInit } from '@angular/core';
import { Title, AppService } from '../app.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private service: AppService) { }

  trac: Title[];

  ngOnInit() {
    this.service.setLang().subscribe(a => this.trac = a);
  }

}
