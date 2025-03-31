import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent {
  products:any;
  cat_id:any;
  cat_name:any;
  add_category =new FormGroup({
    category_name:new FormControl(''),
 
})
  constructor(private api:ApiService){
    {
      this.api.getCatlist().subscribe((res:any)=>{
        console.log(res);
        this.products=res;
      })
    }
  }

   saveData(){
    console.log(this.add_category.value);
    this.api.postRegisterdetail(this.add_category.value).subscribe((res:any)=>{
      console.log(res);
      //this.router.navigate(["/"]);
    });
  }
  deleteCategory(id:any){
    //console.log(id);
    if(confirm("Are You Sure")){
      this.api.delete(id).subscribe((res:any)=>{
        console.log(res);
        //this.fetchData();
      });
    }
  }
}
