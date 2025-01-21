import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorsComponent } from './Components/interiors/interiors.component';
import { PaintingComponent } from './Components/painting/painting.component';
import { FurnitureComponent } from './Components/furniture/furniture.component';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';

const routes: Routes = [

  {
        path: '',
        component: SidebarComponent,
        children:[
          {
            path:'interiors',
            component:InteriorsComponent
          },
          {
            path:'painting',
            component:PaintingComponent
          },
          {
            path:'furniture',
            component:FurnitureComponent
          },
        ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeServicesRoutingModule { }
