import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw';
}
