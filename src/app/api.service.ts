import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint="http://localhost:8080/api/Product_details/";
  constructor(private http:HttpClient) { }

  getCatlist(){
    return this.http.get(this.endpoint+'category');
  }
  postRegisterdetail(data:any){
    return this.http.post(this.endpoint+'add_category',data);
  }

  delete(id:any){
    
    return this.http.delete(this.endpoint+'category/'+id);

  }
  update(id:any,data:any){
    return this.http.put(this.endpoint+'updatecategory/'+id,data);

  }
  productlist(){
    return this.http.get(this.endpoint+'categories-with-products');
  }

  deleteproduct(id:any){
    
    return this.http.delete(this.endpoint+'delete_product/'+id);

  }

  postproductdetail(data:any){
    return this.http.post(this.endpoint+'add_product',data);
  }
}
