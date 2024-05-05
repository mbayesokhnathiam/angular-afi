import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstApp';

  name = 'Mbaye Sokhna THIAM'

  value = 0;


  isValid = false;

  image = '';

  incrementer(){
    this.value = this.value + 1;
  }

  decrementer(){
    this.value = this.value - 1;
  }
}
