import { Component} from '@angular/core';
import { AppService, Title } from '../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  name: string;
  title: string;

  constructor(private service: AppService) { }

  set() {
    this.service.set(this.name, this.title);
  }

}
