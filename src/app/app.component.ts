import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  duplicarNumero(x:number): number{
    return x*2;
  }
  alumno={
    Matricula: 1234,
    Nombre:'Juan',
    FechaInscrito:new Date(),
    Pago:2020
  };
}
