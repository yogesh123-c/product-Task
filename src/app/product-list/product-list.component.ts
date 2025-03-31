import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
data:any;
  products:any;
  constructor(private api:ApiService){
    //this.data=api.obj;
    console.log(this.data);
    
    {
      this.api.productlist().subscribe((res:any)=>{
        console.log(res);
        this.products=res;
      })
    }

  }

  deleteProduct(id:any){
    console.log(id);
    if(confirm("Are You Sure")){
      this.api.deleteproduct(id).subscribe((res:any)=>{
        console.log(res);
        //this.fetchData();
      });
    }
  }
}
