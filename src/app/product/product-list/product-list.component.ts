import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:any[]=[{
 
    "ProductoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Year":"marzo 2021",
    "Precio": 120000,
    "Color": "Azul",
    "Marca":"Chevrolet",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLH2VtWDz4x24V4ldhNC_0IOxZaWAzxOdKg&s"
 
  },
 
  {
    "ProductoId":2,
    "Modelo":"Chevy",
    "Descripcion":"4 puertas",
    "Year":"enero 2021",
    "Precio": 340000,
    "Color": "Blanco",
    "Marca":"NISSAN",
    "ImagenUrl":"https://img.freepik.com/vector-gratis/coche-sedan-blanco-aislado-vector-blanco_53876-67356.jpg"
 
  },
 
  {
    "ProductoId":3,
    "Modelo":"Honda",
    "Descripcion":"2 puertas",
    "Year":"julio 2021",
    "Precio": 220000,
    "Color": "Rojo",
    "Marca":"AUDI",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLR_kSYWcqhmxk7zHgcWqL0_aoB4DufpC1MA&s"
  }
  ]
}
