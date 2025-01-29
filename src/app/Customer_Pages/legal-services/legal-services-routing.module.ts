import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';
import { GetAdvocateComponent } from './Components/get-advocate/get-advocate.component';

const routes: Routes = [
  {
        path: '',
        component: SidebarComponent,
        children:[
          {
            path:'getAdvocate',
            component:GetAdvocateComponent
          },
          
          
  
        ]
     },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalServicesRoutingModule { }
