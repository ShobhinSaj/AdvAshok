import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        'path':'',
        component:HomePageComponent,
        title:'AdvAshok'
    },
    {
        'path':'home',
        component:HomePageComponent,
        title:'AdvAshok-Home'
    },
    {   'path':'services',
        component:ServicesPageComponent,
        title:'AdvAshok-Services'
        
    },
    {   'path':'contact',
        component:ContactPageComponent,
        title:'AdvAshok-Contact'
        
    },
    {   'path':'**',
        'pathMatch': 'full',  
        component: PageNotFoundComponent }
];
export default routes;
