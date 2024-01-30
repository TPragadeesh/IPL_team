import { Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'manager-auth', component: SellerAuthComponent},
    {path: 'manager-home/:teamName', component: SellerHomeComponent, canActivate:[AuthGuard]},
    {path: 'manager-add-product', component: SellerAddProductComponent, canActivate:[AuthGuard]},
    {path: 'manager-update-product/:id', component: SellerUpdateProductComponent, canActivate:[AuthGuard]},
    {path: 'search/:query', component:SearchComponent},
    {path: 'details/:id', component:ProductDetailsComponent},
    {path: '**', component: PageNotFoundComponent},
];
