import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadpropertiesComponent } from './UploadProperties/uploadproperties/uploadproperties.component';
import { ViewpropertiesComponent } from './UploadProperties/viewproperties/viewproperties.component';
import { RegisterpropertyComponent } from './Registration/registerproperty/registerproperty.component';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';

const routes: Routes = [

   {
      path: '',
      component: SidebarComponent,
      children:[
        {
          path:'registerProperties',
          component:RegisterpropertyComponent
        },
        {
          path:'uploadProperties',
          component:UploadpropertiesComponent
        },
        {
          path:'viewUploadedProperties',
          component:ViewpropertiesComponent
        },
      ]
   },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
