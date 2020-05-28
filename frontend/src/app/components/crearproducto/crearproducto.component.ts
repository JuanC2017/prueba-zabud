import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css'],
  providers: [ProductoService ]
})
export class CrearproductoComponent implements OnInit {

  public title: string;
  public producto: Producto;
  public status: string;

  constructor(
    private _productoService: ProductoService, 
  ) { 

    this.title = 'Crear Producto';
    this.producto = new Producto(null, '','',null);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._productoService.saveProducto(this.producto).subscribe(
      response =>{
        if (response.producto) {
          this.status ="succes";
          form.reset();
        }else{
          this.status = "failed"
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }



}
