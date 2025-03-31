import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"category",component:CategoryDetailComponent},
  {path:"details",component:ProductFormComponent},
  {path:"list",component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
