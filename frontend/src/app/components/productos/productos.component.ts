import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService],
})
export class ProductosComponent implements OnInit {

  public title: String;
  public productos: Producto[];
  public url: String;


  constructor(private _productoService: ProductoService,) { 

    this.title = 'Listado de productos';
  }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos() {
    this._productoService.getProductos().subscribe(
      response => {

        if (response.productos) {
          this.productos = response.productos;
        }


      },
      error => {
        console.log(<any>error);
      }
    )
  }



}
