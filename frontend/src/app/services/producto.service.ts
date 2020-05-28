import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto} from '../models/producto';
import { global } from './global';

@Injectable()
export class ProductoService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = global.url;
    }

    testService() {
        return 'probando el servicio de angular paciente';
    }

    saveProducto(producto: Producto): Observable<any> {

        let params = JSON.stringify(producto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');


        return this._http.post(`${this.url}save-producto`, params, { headers: headers });

    }

    getProductos(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');


        return this._http.get(this.url + 'productos', { headers: headers });


    }

}
