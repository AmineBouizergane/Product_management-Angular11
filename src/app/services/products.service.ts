import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({providedIn: 'root'})
export class ProductsService{
  constructor(private  http: HttpClient) {

  }

  getAllProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products');
  }

  getSelectedProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?selected=true');
  }

  getAvailableProducts(): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?available=true');
  }

  searchProducts(keyword:string): Observable<Product[]>{
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?name_like='+keyword);
  }

  select(p: Product):Observable<Product> {
    const host = environment.host;
    p.selected=!p.selected;
    return this.http.put<Product>(host + '/products/'+p.id,p);
  }

  save(p: Product):Observable<Product> {
    const host = environment.host;
    return this.http.post<Product>(host + '/products/',p);
  }

  delete(p: Product) {
    const host = environment.host;
    return this.http.delete<Product>(host + '/products/'+p.id);
  }
}
