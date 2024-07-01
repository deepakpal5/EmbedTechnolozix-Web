import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import {ContactusComponent  } from "./contactus/contactus.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ServicesComponent } from "./services/services.component";
import {  StoreComponent} from "./store/store.component";


const routes: Routes = [
  { path: '', component: HomepageComponent , pathMatch: 'full'},
    {path:'homePage',component:HomepageComponent},
    {path:'AboutUs',component:AboutusComponent},
    {path:'ContactUs',component:ContactusComponent},
    {path:'Service',component:ServicesComponent},
    {path:'Store',component:StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
