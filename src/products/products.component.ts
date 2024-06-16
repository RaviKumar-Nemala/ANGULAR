import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor( private activeRouter: ActivatedRoute , private router:Router)
  {
    console.log( activeRouter.snapshot.params['id']) 
    this.router.navigate(['/users'] , {queryParams : { id :123 , name :'ravikumar'} }  );
  }
}
