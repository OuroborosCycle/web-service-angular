import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'Products', component: ProductsComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'Form', component: FormComponent},
  { path: 'Welcome', component: WelcomeComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
