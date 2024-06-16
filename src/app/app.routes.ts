import { Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { UsersAddComponent } from '../users/users-add/users-add.component';

export const routes: Routes = [
    {
        path : '',
        component :UsersComponent
    },
    {
        path:'users',
        component:UsersComponent,
    },
    {
        path:'users/add',
        component:UsersAddComponent
    },
    {
        path:'products',
        component: ProductsComponent
    }
];
