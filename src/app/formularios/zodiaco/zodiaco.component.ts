import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  resultadoEdad: number = 0;
  signoZodiacoChino: string = '';
  imagenSigno: string = '';
  nombreCompleto: string = '';

  signosChinos: { signo: string, imagen: string }[] = [
    { signo: 'Rata', imagen: 'rata.png' },
    { signo: 'Buey', imagen: 'buey.png' },
    { signo: 'Tigre', imagen: 'tigre.png' },
    { signo: 'Conejo', imagen: 'conejo.png' },
    { signo: 'Dragon', imagen: 'dragon.png' },
    { signo: 'Serpiente', imagen: 'serpiente.png' },
    { signo: 'Caballo', imagen: 'caballo.png' },
    { signo: 'Cabra', imagen: 'cabra.png' },
    { signo: 'Mono', imagen: 'mono.png' },
    { signo: 'Gallo', imagen: 'gallo.png' },
    { signo: 'Perro', imagen: 'perro.png' },
    { signo: 'Cerdo', imagen: 'cerdo.png' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      sexo: new FormControl('M', Validators.required)
    });
  }

  calcularEdadYSigno(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const apellidoPaterno = this.formulario.get('apellidoPaterno')?.value;
    const apellidoMaterno = this.formulario.get('apellidoMaterno')?.value;
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const anio = this.formulario.get('anio')?.value;

    this.nombreCompleto = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;

    const fechaActual = new Date(2024, 9, 8); 
    const fechaNacimiento = new Date(anio, mes - 1, dia); 


    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    const cumpleEsteAno = new Date(fechaActual.getFullYear(), mes - 1, dia);
    if (fechaActual < cumpleEsteAno) {
      edad--;
    }

    this.resultadoEdad = edad;

    const signoIndex = (anio - 4) % 12;
    this.signoZodiacoChino = this.signosChinos[signoIndex].signo;
    this.imagenSigno = this.signosChinos[signoIndex].imagen;
  }
}
