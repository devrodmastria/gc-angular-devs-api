import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompleteListComponent } from './components/complete-list/complete-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompleteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDonutsAPI';
}
