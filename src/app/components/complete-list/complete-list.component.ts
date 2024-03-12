import { Component } from '@angular/core';
import { DevsModel } from '../../models/devs-model';
import { InnovatorsService } from '../../services/innovators.service';

@Component({
  selector: 'app-complete-list',
  standalone: true,
  imports: [],
  templateUrl: './complete-list.component.html',
  styleUrl: './complete-list.component.css'
})
export class CompleteListComponent {
  constructor(private hofService: InnovatorsService){}

  hallOfFame : DevsModel = {} as DevsModel;

  ngOnInit(){
    console.log('OnInit');
    this.hofService.getCompleteList().subscribe((response: DevsModel) =>{
      this.hallOfFame = response;
    })
  }
}
