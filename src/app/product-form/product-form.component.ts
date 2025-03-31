import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
products: any[] = [];
selectedCategory: { id: number, name: string } | null = null;
  add_product =new FormGroup({
    category_id:new FormControl(''),
    product_name:new FormControl(''),
    product_desc:new FormControl(''),
})
  constructor(private api:ApiService) {
    {
      this.api.getCatlist().subscribe((res:any)=>{
        console.log(res);
        this.products=res;
      })
    }
  }
 
  saveDataproduct(){
    console.log(this.add_product.value);
    this.api.postproductdetail(this.add_product.value).subscribe((res:any)=>{
      console.log(res);
      //this.router.navigate(["/"]);
    });
  }
  selectCategory(category_id: number, category_name: string) {
    this.selectedCategory = { id: category_id, name: category_name };
    this.add_product.patchValue({ category_id: category_id.toString() }); // Set category_id in form
  }

}
