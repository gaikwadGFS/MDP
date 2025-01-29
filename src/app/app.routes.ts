import { Routes } from '@angular/router';
import { HeaderComponent } from './Website_Pages/layout/header/header.component';
import { HomeComponent } from './Website_Pages/components/home/home.component';
import { AboutComponent } from './Website_Pages/components/about/about.component';
import { ContactComponent } from './Website_Pages/components/contact/contact.component';
import { GallaryComponent } from './Website_Pages/components/project/gallary/gallary.component';
import { ProjectsComponent } from './Website_Pages/components/project/projects/projects.component';
import { LoginComponent } from './Website_Pages/components/login/login.component';
import { SidebarComponent } from './Customer_Pages/Layout/sidebar/sidebar.component';
import { RegisterComponent } from './Website_Pages/components/register/register.component';
import { DashboardComponent } from './Customer_Pages/customers/Components/dashboard/dashboard.component';


export const routes: Routes = [
    
    {
        path: '',
        redirectTo: '/Home',  // Default route to redirect to /home
        pathMatch: 'full'
      },
      {
        path:'navbar',
        component:HeaderComponent
    },
      
    {
        path:'',
        component:HeaderComponent,
        children:[
            {
                path:'Home',
                component:HomeComponent
            },
            {
                path:'About',
                component:AboutComponent
            },
            {
                path:'contact',
                component:ContactComponent
            },
            {
                path:'gallary',
                component:GallaryComponent
            },
            {
                path:'project',
                component:ProjectsComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            }
        ]
    },
    {
        path: 'customer',
       loadChildren: () => import('./Customer_Pages/customers/customers.module').then(m => m.CustomersModule)
     },
     {
        path: 'home-service',
       loadChildren: () => import('./Customer_Pages/home-services/home-services.module').then(m => m.HomeServicesModule)
     },
     {
        path: 'properties',
       loadChildren: () => import('./Customer_Pages/properties/properties.module').then(m => m.PropertiesModule)
     },
     {
        path: 'legalServices',
       loadChildren: () => import('./Customer_Pages/legal-services/legal-services.module').then(m => m.LegalServicesModule)
     },
    // {
    //     path:'sidebar',
    //     component:SidebarComponent,
    //     children:[
    //         {
    //             path:'dashboard',
    //             component:DashboardComponent
    //         }
    //     ]
    // }
];
